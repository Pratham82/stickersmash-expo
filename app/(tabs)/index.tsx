import { useState } from "react"
import { Text, View, StyleSheet, Alert } from "react-native"
import { type ImageSource } from "expo-image"
import * as ImagePicker from "expo-image-picker"

import Button from "@/components/Button"
import ImageViewer from "@/components/ImageViewer"
import CircleButton from "@/components/CircleButton"
import IconButton from "@/components/IconsButton"
import EmojiPicker from "@/components/EmojiPicker"
import EmojiList from "@/components/EmojiList"
import EmojiSticker from "@/components/EmojiSticker"

const placeHolderImage = require("../../assets/images/background-image.png")

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<{ uri: string }>({ uri: "" })
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedEmoji, setSelectedEmoji] = useState<ImageSource | undefined>(undefined)

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      console.log(result)
      if (result.assets && result.assets.length > 0) {
        setSelectedImage({ uri: result.assets[0].uri })
        setShowAppOptions(true)
      }
    } else {
      Alert.alert("Image picker was cancelled")
    }
  }

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {
    // we will implement this later
    setIsModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={selectedImage?.uri ? selectedImage.uri : placeHolderImage} />

        {selectedEmoji && <EmojiSticker imageSize={40} stickerSource={selectedEmoji} />}
      </View>

      {showAppOptions ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon="restore" label="Reset" onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View>
          <Button label="Choose Image" theme="primary" onClick={() => setShowAppOptions(true)} />
          <Button
            label="Use this photo"
            theme="secondary"
            onClick={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <Text>Stickers go here</Text>
        <EmojiList onSelect={setSelectedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#25292e",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
})
