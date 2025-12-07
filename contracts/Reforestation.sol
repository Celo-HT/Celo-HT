// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract Reforestation {
  struct Entry {
    uint256 id;
    string location;
    uint256 trees;
    address reporter;
    uint256 timestamp;
  }
  Entry[] private entries;
  uint256 public nextId = 1;
  event EntryCreated(uint256 id, string location, uint256 trees, address reporter, uint256 timestamp);
  function report(string calldata location, uint256 trees) external returns (uint256) {
    require(trees > 0, "trees>0");
    uint256 id = nextId;
    entries.push(Entry({id: id, location: location, trees: trees, reporter: msg.sender, timestamp: block.timestamp}));
    nextId++;
    emit EntryCreated(id, location, trees, msg.sender, block.timestamp);
    return id;
  }
  function getEntry(uint256 id) external view returns (Entry memory) {
    for (uint i = 0; i < entries.length; i++) {
      if (entries[i].id == id) return entries[i];
    }
    revert("not found");
  }
  function totalEntries() external view returns (uint256) {
    return entries.length;
  }
}