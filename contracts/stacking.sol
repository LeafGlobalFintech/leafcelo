pragma solidity >=0.4.22 <0.8.0;

contract stacking {
   /**
     * @notice This internal function will let know who are all the stakeholders interested in stakin.
     */
    address[] public refugeeAddress; //Address of the stakeholder
    /**
     * @notice Value of the stake investeed by an individual refugee.
     */
    mapping(address => uint256) public stakeAmount;

      /**
     * @notice Duration for which this value of the stake is invested for by an individual refugee.
     */
    mapping(address => uint256) public stakeDuration;

    /**
     * @notice The accumulated rewards of a refugee .
     */
    mapping(address => uint256) public rewards;

     /**
     * @notice A method for a stakeholder to create a stake.
     * @param _stake The size of the stake to be created.
     * @param _duration Duration of the.
     */
    function putStake(uint256 _stake, uint256 _duration)
        public
    {
      
        _burn(msg.sender, _stake, _duration);
        if(stakeAmount[msg.sender] == 0) (msg.sender);
        stakeAmount[msg.sender] = stakeAmount[msg.sender].add(_stake);
    }
}
