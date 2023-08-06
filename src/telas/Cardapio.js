import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Aperitivos',
        data: [
          { name: 'Hummus', price: 'R$35.00' },
          { name: 'Baba Ganoush', price: 'R$35.00' },
          { name: 'Faláfel', price: 'R$17.50' },
          { name: 'Azeitonas Marinadas', price: 'R$25.00' },
          { name: 'Kofta', price: 'R$15.00' },
          { name: 'Salada De Berinjela', price: 'R$18.50' },
        ],
      }, 
      {
        title: 'Pratos Principais',
        data: [
          { name: 'Hambúrguer de Lentilha', price: 'R$45.00' },
          { name: 'Salmão Defumado', price: 'R$60.00' },
          { name: 'Hambúrguer de Carne', price: 'R$38.00' },
          { name: 'Kebab Turco', price: 'R$30.00' },
        ],
      },
      {
        title: 'Acompanhamentos',
        data: [
          { name: 'Batatas Fritas', price: 'R$25.00' },
          { name: 'Arroz Amanteigado', price: 'R$20.00' },
          { name: 'Pãezinhos', price: 'R$10.00' },
          { name: 'Pita Pocket', price: 'R$15.00' },
          { name: 'Sopa de Lentilha', price: 'R$28.50' },
          { name: 'Salada Grega', price: 'R$20.00' },
          { name: 'Arroz Pilaf', price: 'R$22.00' },
        ],
      },
      {
        title: 'Sobremesas',
        data: [
          { name: 'Brigadeiro', price: 'R$8.00' },
          { name: 'Banoffee', price: 'R$20.00' },
          { name: 'Pudim de Leite Condensado', price: 'R$12.00' },
          { name: 'Mousse de Maracujá', price: 'R$15.00' },
        ],
      },
    ];
  
  const Separator = () => <View style={menuStyles.separator} />;

  const Footer = () => (
    <Text style={menuStyles.footerText}>
      All Rights Reserved by Little Lemon 2023
    </Text>

  );

  const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  );
  
  const MenuItems = () => {
    const [showMenu, setShowMenu] = useState(false);

    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  
    const renderSectionHeader = ({ section: { title } }) => (
      <View style={menuStyles.headerStyle}>
        <Text style={menuStyles.sectionHeader}>{title}</Text>
      </View>
    );

    return (
      <View style={menuStyles.container}>
        {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon é um charmoso bistrô de bairro que serve comida simples
           e cocktails clássicos num ambiente animado mas casual. Veja nosso
           menu para explorar a nossa cozinha com especialidades diárias!
        </Text>
        )}
        <Pressable
        style={menuStyles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}>
        <Text style={menuStyles.buttonText}>
          {showMenu ? 'Início' : 'Ver Cardápio'}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}>
        </SectionList>
        )}
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
      fontSize: 30,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    itemText: {
      color: '#F4CE14',
      fontSize: 18,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: '#EDEFEE',
    },
    footerText: {
      color: '#EDEFEE',
      fontSize: 12,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 2,
      borderRadius: 12
    },
    buttonText: {
      color: '#333333',
      textAlign: 'center',
      fontSize: 32,
    },
    infoSection: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
    },
  });
  
  export default MenuItems;