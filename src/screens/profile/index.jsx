import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector} from "../../components";
import { savePlace } from "../../store/place.slice";
import colors from "../../constants/themes";
import { styles } from "./styles";

const setProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(savePlace({ name, image}));
    navigation.navigate("Places");
  };

  const onHandleChange = (text) => {
    setName(text);
  };

  const onImagePicker = (uri) => {
    setImage(uri);
  };
  const onLocationPicker = (location) => {
    console.warn(location);
    setCoords(location);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput
          onChangeText={onHandleChange}
          style={styles.input}
          placeholder="Escribe tu Nombre"
        />
        <ImageSelector onImagePicker={onImagePicker} />
        <Button color={colors.primary} title="Guardar Perfil" onPress={onHandleSubmit} />
      </View>
    </ScrollView>
  );
};

export default setProfile;
