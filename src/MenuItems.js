import React from 'react';
import { View, Text, StyleSheet, SectionList} from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
          { name: 'Hummus', price: '$5.00' },
          { name: 'Moutabal', price: '$5.00' },
          { name: 'Falafel', price: '$7.50' },
          { name: 'Marinated Olives', price: '$5.00' },
          { name: 'Kofta', price: '$5.00' },
          { name: 'Eggplant Salad', price: '$8.50' },
        ],
      },
      {
        title: 'Main Dishes',
        data: [
          { name: 'Lentil Burger', price: '$10.00' },
          { name: 'Smoked Salmon', price: '$14.00' },
          { name: 'Kofta Burger', price: '$11.00' },
          { name: 'Turkish Kebab', price: '$15.50' },
        ],
      },
      {
        title: 'Sides',
        data: [
          { name: 'Fries', price: '$3.00', id: '11K' },
          { name: 'Buttered Rice', price: '$3.00' },
          { name: 'Bread Sticks', price: '$3.00' },
          { name: 'Pita Pocket', price: '$3.00' },
          { name: 'Lentil Soup', price: '$3.75' },
          { name: 'Greek Salad', price: '$6.00' },
          { name: 'Rice Pilaf', price: '$4.00' },
        ],
      },
      {
        title: 'Desserts',
        data: [
          { name: 'Baklava', price: '$3.00' },
          { name: 'Tartufo', price: '$3.00' },
          { name: 'Tiramisu', price: '$5.00' },
          { name: 'Panna Cotta', price: '$5.00' },
        ],
      },
    ];
  
  const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );
  
  const MenuItems = () => {
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  
    const renderSectionHeader = ({ section: { title } }) => (
      <View style={menuStyles.headerStyle}>
        <Text style={menuStyles.sectionHeader}>{title}</Text>
      </View>
    );
  
   const Separator = () => <View style={menuStyles.separator} />;
  
   const Footer = () => (
      <Text style={menuStyles.footerText}>
        All Rights Reserved by Little Lemon
      </Text>
    );

    return (
      <View style={menuStyles.container}>
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}>
        </SectionList>
      </View>
    );
  };
  
  const menuStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionHeader: {
      backgroundColor: '#fbdabb',
      color: '#333333',
      fontSize: 34,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: '#F4CE14',
      fontSize: 32,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#EDEFEE',
    },
    footerText: {
      color: '#EDEFEE',
      fontSize: 1,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
  });
  
  export default MenuItems;