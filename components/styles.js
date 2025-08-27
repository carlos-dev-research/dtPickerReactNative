import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    justifyContent:"flex-start",
    alignItems:"stretch"
  },
  headerContainer: {
    width: "100%",
  },
  header: {
    flexDirection:"column",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 15,
    alignItems: "flex-start",
  },
  expanded: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  label: {
    width: 50,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  labelBig: {
    fontSize: 18,
    textAlign: "center",
  },
  cell: {
    width:100,
    fontSize:20,
    textAlign:"right",
    padding:10
  },
  cellAm:{
    width:100,
    fontSize:20,
    color:"white",
    textAlign:"center"
  },
  cellBtnAm:{
    width:100,
    height:50,
    marginHorizontal:10,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#007AFF",
  },
  cellBtn: {
    width:50,
    height:50,
    marginHorizontal:10,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#007AFF",
    
  }
});