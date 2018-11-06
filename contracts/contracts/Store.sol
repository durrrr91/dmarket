pragma solidity ^0.4.4;

contract Store {

    struct Content {
        address owner;
        uint price;
    }
    
    struct Order {
        address buyer;
    }
    
    mapping(bytes => Content) contents;
    mapping(bytes => Order) orders;

    address contractMaker;
    
    constructor() public {
        contractMaker = msg.sender;
    }
    
    function add(bytes fingerprint, uint price) public returns (bytes _fingerprint) {
        Content content = contents[fingerprint];
        content.owner = msg.sender;
        content.price = price;
        return fingerprint;
    }
        
    function getPrice(bytes fingerprint) public constant returns(uint _price){
        Content content = contents[fingerprint];
        return (content.price);
    }
    
    function buy(bytes fingerprint) public payable returns(bytes _fingerprint){
        Content content = contents[fingerprint];
        Order order = orders[fingerprint];
        if (msg.value < content.price) {
            revert("Insufficient funds provided.");
        } else {
            order.buyer = msg.sender;
            content.owner.transfer(msg.value);
            return fingerprint;
        }   
    }
    
    function proveBuy(bytes fingerprint) public constant returns (bool){
        Order order = orders[fingerprint];
        return order.buyer == msg.sender;
    }
    
    function proveOwnership(bytes fingerprint) public constant returns (bool){
        Content content = contents[fingerprint];
        return content.owner == msg.sender;
    }
}