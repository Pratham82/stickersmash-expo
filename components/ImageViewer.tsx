import { Image } from "expo-image"
import { StyleSheet } from "react-native"

type ImageProps = {
  imageSource: string
}

export default function ImageViewer({ imageSource }: ImageProps) {
  return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 10,
  },
})
