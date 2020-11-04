pragma solidity >=0.4.22 <0.8.0;

contract lending {
   /**
     * @notice This internal function will let know who are all the stakeholders interested in stakin.
     */
    address[] public refugeeAddress; //Address of the stakeholder
    /**
     * @notice Value of the stake investeed by an individual refugee.
     */
    mapping(address => uint256) public lendingAmount;

      /**
     * @notice Duration of lending.
     */
    mapping(address => uint256) public lendingDuration;

    /**
     * @notice The accumulated rewards of a refugee .
     */
    mapping(address => uint256) public rewards;

     /**
     * @notice A method for a stakeholder to create a stake.
     * @param _stake The size of the stake to be created.
     * @param _duration Duration of the.
     */
    function requestLending(uint256 amount)
        public
    {
            return _duration + 3
    }
}
