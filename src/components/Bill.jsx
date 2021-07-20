import React, { useState } from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

// item -> used to populate read-only div
// person -> populate the dropdown
const ItemList = ({ item, person, setPerson }) => {
  // Create options needed for react-multiselect library
  const options = [];
  // personIndex is used to search & store amount
  person.forEach((hotpotPerson, personIndex) => {
    const hotpotPersonObject = {};
    hotpotPersonObject.label = hotpotPerson.name;
    hotpotPersonObject.value = personIndex;
    options.push(hotpotPersonObject);
  });

  const handlePersonDropdown = (e, itemIndex) => {
    // peopleSelected = [ {label: Sam, value: 0}, ...]
    // [ {dropdown 1, hotpotItem: 1}] ≠ [ {dropdown 2 Sam, hotpotItem: 2 }]

    /* we can kick out all the indices of people who are included to be left with an array of objects of people who are excluded  */
    const peopleSelected = e.value;

    // Store all the people names
    const peopleNamesSelected = [];
    for (let i = 0; i < peopleSelected.length; i += 1) {
      peopleNamesSelected.push(peopleSelected.label);
    }

    // Remove all item index from the other people not included inside peopleSelected
    // peopleExcluded = [ Kai, Tong, ... ]
    const peopleExcluded = person.filter((p) => !peopleSelected.includes(p.name));

    // For each index inside the peopleSelected list, add the item index to their items key
    for (let i = 0; i < peopleSelected.length; i += 1) {
      // personIndex = Literal position of the hotpotPerson inside the array of person
      const personIndex = peopleSelected[i];

      // We grab hold of the actual person object from the parent here
      // person[personIndex]

      // push a new itemIndex into the items array, pushing value in place via key
      // If p.items doesn't have itemIndex inside the array
      if (!person[personIndex].items.includes(itemIndex)) {
        person[personIndex].items = [...person[personIndex].items, itemIndex];
        setPerson([...person]);
      }
    }
  };

  // handlePersonDropdown is called when the user clicks on the dropdown options
  const PersonDropdown = ({ itemIndex }) => (
    <ReactMultiSelectCheckboxes options={options} getDropdownButtonLabel={(e) => handlePersonDropdown(e, itemIndex)} />
  );

  return (
    item.map((hotpotItem, itemIndex) => (
      <div>
        <p>{hotpotItem.name}</p>
        <p>{hotpotItem.price}</p>
        <PersonDropdown itemIndex={itemIndex} />
        {/* We pass the index to line 22 -> 16 */}
      </div>
    )));
};

// view person + amount they amount owed
const PersonList = ({ person }) => (
  person.map((hotpotPerson) => (
    <div>
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
// For amount each person owes -> item price / number of people (personSelected array)
// Associate that same amount to that person index

//     -- PersonList() -> Person name + amount they
