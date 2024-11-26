import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
},
header: {
    backgroundColor: '#ffa726',
    padding: 20,
    alignItems: 'center',
},
discountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
},
verifiedText: {
    fontSize: 16,
    color: '#fff',
},
section: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
},
sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
},
packageImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
},
packageDescription: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
},
sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
seeAllText: {
    color: '#007bff',
},
serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
},
serviceCard: {
    width: '48%',
    alignItems: 'center',
},
serviceImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
},
serviceText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
},
bottomNav: {
    position: 'absolute',  
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f9f9f9',
},
navItem: {
    alignItems: 'center',
    justifyContent: 'center',
},
navIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
},
navText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
},
});

export default styles;