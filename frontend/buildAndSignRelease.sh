printf  "Select Option. 1) Build->Sign-> Install\n2)Sign->Install\n3)Install:\n"
read CH
APPDIR=$(pwd)


#Build APK
if [ $CH == "1" ]
then
	cd "$APPDIR/android"
	.gradlew assembleRelease
fi

# Sign APK
if [ $CH == "1" -o  $CH == "2" ]
then
	# enable it when needed
	# jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keystore/edubigg.keystore "$APPDIR/android/app/build/outputs/apk/release/app-release.apk" edubigg
fi

if [ $CH == "1" -o  $CH == "2" -o  $CH == "3" ]
then
	echo "Installing..."
	#adb install android/app/build/outputs/apk/debug/app-debug.apk
	adb install -r "$APPDIR/android/app/build/outputs/apk/release/app-release.apk"
fi
