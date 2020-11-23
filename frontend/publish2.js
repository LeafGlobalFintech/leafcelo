const fs = require('fs')
const package = require("./package.json");;
const childProcess = require('child_process');
const execSync = childProcess.execSync;

const operation = process.argv[2] || "p"
const variant = process.argv[3] || "d"
// e.g. node publish2 i/p d/r
let debugPath = ""
let releasePath = ""
let apkPath = ""
if (fs.existsSync("android")) {
    debugPath = "android/app/build/outputs/apk/debug/app-debug.apk";
    releasePath = "android/app/build/outputs/apk/release/app-release.apk";
}

if (fs.existsSync("platforms/android")) {
    debugPath = "platforms/android/app/build/outputs/apk/debug/app-debug.apk";
    releasePath = "platforms/android/app/build/outputs/apk/release/app-release.apk";
}

if (variant === "d") {
    apkPath = debugPath
}
else if (variant == "r") {
    apkPath = releasePath;
}
else {
    console.log("invalid variant")
}

if (operation == "p") {
    const fileTmpPath = `/tmp/${package.name}-${variant}.apk`;
    fs.copyFileSync(apkPath, fileTmpPath)

    const cmd = `
    echo "Uploading... Please Wait";
    curl --location --request POST 'http://hmdlohar.uk.nf/u/upload_apk.php?token=hmdlohar' \
    --form 'file=@${fileTmpPath}' \
    --progress-bar -sS 
    echo "";`


    const code = execSync(cmd);
    console.log(code.toString())
}
else if (operation == "i") {
    console.log(apkPath)
    const cmd = `adb install -r "${apkPath}"`;
    const code = execSync(cmd);
    console.log(code.toString())
}
else if (operation == "b") {

}
else {
    console.log("invalid operation")
}



function assembleBuild(v) {
    passthru('./gradlew', ['assembleRelease'], { cwd: `${process.cwd()}/android/` })
}

async function passthru(exe, args, options) {
    return new Promise((resolve, reject) => {
        const spawn = childProcess.spawn;
        const env = Object.create(process.env);
        const child = spawn(exe, args, {
            ...options,
            env: {
                ...env,
                ...options.env,
            },
        });
        child.stdout.setEncoding('utf8');
        child.stderr.setEncoding('utf8');
        child.stdout.on('data', data => console.log(data));
        child.stderr.on('data', data => console.log(data));
        child.on('error', error => reject(error));
        child.on('close', exitCode => {
            console.log('Exit code:', exitCode);
            resolve(exitCode);
        });
    });
}