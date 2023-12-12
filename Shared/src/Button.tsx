import { Text, Pressable, StyleSheet } from "react-native";

type Props = {
  label: string;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: "powderblue",
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

const ExternalButton: React.FC<Props> = ({ label }) => {
  return (
    <>
      <Pressable
        onPress={() => {
          console.log("hello");
          alert("hello");
        }}
        style={styles.button}
      >
        <Text>{label}</Text>
      </Pressable>
    </>
  );
};

export default ExternalButton;
