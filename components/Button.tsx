import { CSSProperties } from "react"
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

type ButtonProps = {
  label: string
  onClick: () => void
  theme?: "primary" | "secondary"
}

type GetStylesReturnType = {
  button: StyleProp<ViewStyle>[]
  buttonContainer: StyleProp<ViewStyle>[]
  buttonLabel: StyleProp<TextStyle>[]
}

export default function Button({ label, onClick = () => {}, theme }: ButtonProps) {
  const getStyles = (theme: ButtonProps["theme"]): GetStylesReturnType => {
    switch (theme) {
      case "primary":
        return {
          button: [
            styles.button,
            {
              backgroundColor: "white",
            },
          ],
          buttonContainer: [
            styles.buttonContainer,
            {
              borderWidth: 4,
              borderColor: "#ffd33d",
              borderRadius: 18,
            },
          ],
          buttonLabel: [
            styles.buttonLabel,
            {
              color: "black",
            },
          ],
        }
      case "secondary":
        return {
          button: [styles.button],
          buttonContainer: [styles.buttonContainer],
          buttonLabel: [styles.buttonLabel],
        }
      default:
        return {
          button: [styles.button],
          buttonContainer: [styles.buttonContainer],
          buttonLabel: [styles.buttonLabel],
        }
    }
  }

  const {
    button: buttonStyles,
    buttonContainer: buttonContainerStyles,
    buttonLabel: buttonLabelStyles,
  } = getStyles(theme)

  return (
    <View style={buttonContainerStyles}>
      <Pressable style={buttonStyles} onPress={() => onClick()}>
        <Text style={buttonLabelStyles}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  text: {
    color: "#fff",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // color: '#fff',
    // backgroundColor: '#000',
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    // marginTop: 10,
  },
  buttonIcon: {
    paddingRight: 10,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },

  primaryButtonStyles: {
    backgroundColor: "#fff",
  },
})
