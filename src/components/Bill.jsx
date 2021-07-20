import React, { useState } from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

// item -> used to populate read-only div
// person -> populate the dropdown
const ItemList = ({ item, person }) => {
  // We can pass itemIndex in the anonymous function
  // onChange is provided by the NPM library to take in value and event as parameters
  const PersonDropdown = ({ itemIndex }) => {
    // Create options needed for react-multiselect library
    const options = [];
    // personIndex is used to search & store amount
    person.forEach((hotpotPerson, personIndex) => {
      const hotpotPersonObject = {};
      hotpotPersonObject.label = hotpotPerson.name;
      hotpotPersonObject.value = personIndex;
      options.push(hotpotPersonObject);
    });

    // selectedOptions = array of user indices that are selected
    const [selectedOptions, setSelectedOptions] = useState(options);

    // on event.action => "select-option", "deselect-option"
    const onChange = (value, event, itemIndex) => {
      const { action } = event;
      const userIndex = event.option.value;

      switch (action) {
        case 'select-option':
          // add the itemIndex to the person object's items array
          // person[userIndex].items.push(itemIndex);
          setSelectedOptions([...selectedOptions, userIndex]);
          break;
        case 'deselect-option':
          const remainingItemsArr = selectedOptions.filter((name) => name !== userIndex);
          setSelectedOptions(remainingItemsArr);
          break;
        default:
          break;
      }
    };

    return (
      <ReactMultiSelectCheckboxes
        options={options}
        // We use local state to store the selected checkbox items for each person
        value={selectedOptions}
        // setState={setSelectedOptions}
        onChange={(value, event) => { onChange(value, event, itemIndex); }}
      />
    );
  };

  return (
    item.map((hotpotItem, itemIndex) => (
      <div key={itemIndex}>
        <p>{hotpotItem.name}</p>
        <p>{hotpotItem.price}</p>
        <PersonDropdown itemIndex={itemIndex} />
        {/* We pass the index to line 22 -> 16 */}
      </div>
    )));
};

// view person + amount they amount owed
const PersonList = ({ person }) => (
  person.map((hotpotPerson, index) => (
    <div key={index}>
      <p>{hotpotPerson.name}</p>
      <p>{hotpotPerson.amount}</p>
    </div>
  ))
);

export default function Bill({ item, person, setPerson }) {
  const handleAddPerson = () => {
    console.log('clicked');
  };

  return (
    <div>
      <h1>Item List</h1>
      {/* This makes sure that there are items, persons inside the list before rendering dropdown */}
      {item.length > 0 && person.length > 0
      && (
      <div>
        <ItemList item={item} person={person} setPerson={setPerson} />
        <button type="button" onClick={handleAddPerson}>Save All</button>
      </div>
      )}

      <h1>Amount Owned Person List</h1>
      {person.length > 0 && <PersonList person={person} /> }

    </div>
  );
}

// -- Bill()
//     -- ItemList() -> Item + person dropdown
//           -- Each item name + item price
//           -- Person Dropdown -> person index, item index
//                --- [selectedOptions, setSelectedOptions]
//                 -> object => { personId: [ array of itemIds ] , 2: [ 101, 102, 103], ... }

// For amount each person owes -> item price / number of people (personSelected array)
// Associate that same amount to that person index
//
// onclose Prop -> setPerson state

//  -- Save Bill --
//                 -> calculations
//                 -> send name, amount to people database

//     -- PersonList() -> Person name + amount they
