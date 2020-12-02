pragma solidity ^0.5.16;

contract Lending {
    
    enum lendingApplicationStatus { New, Approved, Denied }
    enum lendingPaymentStatus { Open, Closed, Default }
    
    lendingApplicationStatus applicationStatus;
    
    struct Lending {
        uint loanId;
        uint principal;
        uint duedate;
        string guarantor;
        bool status;
        bool loanStatus;
        uint rateofInterest;
        uint remainingBalance;
    }
    
    mapping (address => Lending) lendings;
    address[] lendingAccts;
    
    function applyForLoan(address _address, uint _loanId, uint _principal, uint _duedate,string memory _guarantor) public {
        
        Lending storage lending = lendings[_address];
        
        lending.loanId = _loanId;
        lending.principal = _principal;
        lending.duedate = _duedate;
        lending.guarantor = _guarantor;
        
        lendingAccts.push(_address) -1;
        lending.status = bool(loanApplicationStatus(_loanId,_principal,_duedate));
        if(lending.status == true){
            lending.rateofInterest = calculateRateOfInterest(_principal,_duedate);
            lending.remainingBalance = remainingBal(_address,_principal);
        }
        else{
            //console.log("");
        }
        //
        
    }
    
    function getAllBorrowers() view public returns(address[] memory ,uint) {
        return (lendingAccts,lendingAccts.length);
    }
    
    function getABorrower(address _address) view public returns (uint, uint, uint, string memory) {
        return (lendings[_address].loanId, 
                lendings[_address].principal, 
                lendings[_address].duedate,
                lendings[_address].guarantor);
    }
    
    function loanApplicationStatus( uint _loanId, uint _principal, uint _duedate) internal view returns (bool status){
    return true;
}

function calculateRateOfInterest(uint256 _principal, uint256 _duration)  internal view returns (uint256 interestRate)
{
    if(_principal > 10 && _principal < 25) return 2;
    if(_principal > 25 && _principal < 50) return 1;
    
    return (interestRate);
}

function remainingBal(address _address,uint _principal) internal view returns (uint256 _remainingBal){
    Lending storage lending = lendings[_address];
    _remainingBal = _principal + lending.rateofInterest;
    
    return _remainingBal;
}
    
   
    
}