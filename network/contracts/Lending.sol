pragma solidity >=0.5.0 <0.7.0;

contract Lending {
   
   enum loanApplicationStatus { New, Approved, Denied }
   enum loanPaymentStatus { Open, Closed, Default }
   
   event logLoanApplicationStatus(uint256 principal, bool status);
   event logLoanPaymentStatus( uint loanid, bool status);
   
    uint loanid;
    address borrower;
    uint256 principal;
    uint256 public remainingBalance;
    uint256 public interestRate;
    uint256 dueDate;
    string collateral;
    bool public status;

    constructor(
     //   address _borrower,
        uint256 _principal,
        string memory _collateral
        ) public {
            
       // borrower = _borrower;
        principal = _principal;
        collateral = _collateral;
        dueDate = now ; //Add the date component
        
        status = loanApplication(principal,dueDate);
        interestRate = calculateRateOfInterest(principal,dueDate);
        remainingBalance = remainingBal(principal);
  
  }
      

function calculateRateOfInterest(uint256 _principal, uint256 _duration)  internal view returns (uint256 interestRate)
{
    if(_principal > 10 && _principal < 25) return 2;
    if(_principal > 25 && _principal < 50) return 1;
    
    return (interestRate);
}

function loanApplication(uint256 _principal, uint256 _duration) internal view returns (bool status){
    
    
    return true;
}

function remainingBal(uint256 _principal) internal view returns (uint256 _remainingBal){
    _remainingBal = _principal + interestRate;
    
    return _remainingBal;
}

function getLoanApplicationStatus(uint loanid) public returns(bool status){
    emit logLoanApplicationStatus(loanid,status);
      
   }
function getLoanPaymentStatus() public  returns(bool status){
      emit logLoanApplicationStatus(loanid,status);
   }   
   
 
}