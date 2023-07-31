import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export function Participant({ name, participantRemove }) {
  return (
    <View style={styles.container} >
      <Text style={styles.name} >
        {name}
      </Text>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={participantRemove}
      >
        <Text style={styles.buttonText} >
          -
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#4133db',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
  },
  button: {
    width: 43,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#f80515",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
})