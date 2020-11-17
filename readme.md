# LeafCelo
## An asset-backed defi lending platform for refugee

- Architecture
	- ![Architecture](./img/leafCelo-Arch.png)
- Implementation
	- Dependencies 
		- [openzeppelin-solidity](https://openzeppelin.com/contracts/)
	- Smart Contract
	    - constructor()
		  - address payable leafToken
		  - address refugee
		  - address lender,          
          - uint256 valueRequested,
		  - uint256 valueRequestedDuration
		  - string guarantorDetails;     
        - creatingToken()
  		- addRequester()
		- addLender()
		- requestToken()
		- calculateInterests()
		- watchDuration()
		- requestWithdraw()
		- requestCancel()    		
		- issuingRewards()  
		- burnTokens()
		- requestguarantorDetails()
		- releaseguarantorAsset()
 	- Mobile Wallet	
- Build
Goal of this build is to build the apk for the android
	- npm i
    - npm start
    - npm run android(second terminial) 
	
- Testing
- roadmap
	- P2P lending
- Announcements
	- [The 18 finalists of Celo Camp Batch 2](https://medium.com/celoorg/the-18-finalists-in-celo-camp-batch-2-the-up-and-coming-startups-bringing-financial-inclusion-to-845b67e960c8)
- FAQS
- Mockup-UI
- Signin/signup
	- ![Screenshot](./img/leafCelo-Registration.png)
- Apply for loan
	- ![Apply](./img/leafCelo-Apply.png)	
- Submit
	- ![Submit](./img/leafCelo-Submit.png)	
- Result
	- ![Result](./img/leafCelo-Result.png)	