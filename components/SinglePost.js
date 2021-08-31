import React, { useState } from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import FakePost from "../assets/avatar.jpeg";
import HappyPic from "../assets/happy.png";
import { Feather, FontAwesome } from "@expo/vector-icons";
const SinglePost = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handlePress = () => {
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.singlePost}>
      <View style={styles.profile}>
        <Image source={FakePost} style={styles.avatar} />
        <Text style={styles.name}>Hermas Nivk</Text>
      </View>

      <View style={styles.actionPost} isLiked={isLiked} setIsLiked={setIsLiked}>
        <Image source={HappyPic} style={styles.postPics} />
        <View style={styles.icons}>
          <View style={styles.iconsLeft}>
            {isLiked && isLiked ? (
              <FontAwesome
                name="heart"
                size={24}
                color="red"
                style={styles.icon}
                onPress={handlePress}
              />
            ) : (
              <Feather
                name="heart"
                size={24}
                color="gray"
                style={styles.icon}
                onPress={handlePress}
              />
            )}

            <FontAwesome
              name="comment-o"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <Feather name="send" size={24} color="gray" style={styles.icon} />
          </View>

          <View style={styles.iconsRight}>
            <Feather
              name="bookmark"
              size={24}
              color="gray"
              style={styles.icon}
            />
          </View>
        </View>
        <Text style={styles.text}> 10 Likes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singlePost: {
    marginTop: 30,
    flex: 1,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 7,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 30,
    marginTop: 30,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  postPics: {
    flex: 1,
    width: 300,
    height: 300,
    margin: 10,
    borderRadius: 7,
    paddingLeft: 30,
  },
  actionPost: {
    flex: 1,
    alignItems: "center",
    borderRadius: 7,
    justifyContent: "center",
    width: 300,
    height: 300,
  },
  icons: {
    width: 300,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconsLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  iconsRight: {},
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    alignSelf: "flex-start",
    marginLeft: 10,
    fontWeight: "700",
    paddingTop: 20,
    paddingBottom: 20,
  },
  text1: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  name: {
    fontWeight: "700",
  },
});

export default SinglePost;
