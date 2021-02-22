import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { LoginScreenRouteProp } from "../Routes";

type Props = {
    route: LoginScreenRouteProp,
    navigation: undefined
}

const useAsyncHook = () => {

    const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);

    React.useEffect(() => {
        async function fetchAccessToken() {
            setLoading(true);
            const token = await AccessToken.getCurrentAccessToken();
            if (token) {
                setIsLoggedIn(true);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
            else {
                setLoading(false);
            }
        }
        fetchAccessToken();
    }, []);
    return [ isLoggedIn, loading ];
};

const FacebookLoginScreen: React.FC<Props> = ({ route, navigation }) => {

    const [ isLoggedIn, loading ] = useAsyncHook();

    const _friendsResponse = (error: object | undefined, result: object | undefined) => {
        console.log(error);
        console.log(result);
    };

    const _login = async() => {
        const response = await LoginManager.logInWithPermissions([ 'public_profile', 'user_friends' ]);

    }

    const _fetchFriends = () => {
        const request = new GraphRequest(
            '/me/friends',
            null,
            _friendsResponse
        );
        new GraphRequestManager().addRequest(request).start();
    };

    const friendsButton_Pressed = () => {
        if (isLoggedIn) {
            _fetchFriends()
        }
        else {
            _login();
        }
    }

    return (
        loading
            ?
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text>Loading ...</Text>
            </View>
            :
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: '80%', height: 44 }} onPress={friendsButton_Pressed}>
                    <Text style={{ color: 'purple', fontFamily: 'MACCOS DOUBLE Demo', fontSize: 28  }}>
                        { isLoggedIn ? "FRIENDS" : "LOGIN" }
                    </Text>
                </TouchableOpacity>
            </View>
    );
};

export default FacebookLoginScreen;
