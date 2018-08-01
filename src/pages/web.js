/**
 * Created by zhangzuohua on 2018/1/19.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    Linking,
    View,
    Dimensions,
    Animated,
    Easing,
    PanResponder,
    Platform,
    ActivityIndicator,
    TouchableOpacity,
    StatusBar,
    InteractionManager,
    BackHandler,
    ScrollView,
    TouchableWithoutFeedback,
    RefreshControl,
    DeviceEventEmitter,
    LayoutAnimation,
    NativeModules,
    ImageBackground,
    FlatList,
    WebView,
    TextInput,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { ifIphoneX } from '../utils/iphoneX';
import urlConfig from '../utils/urlConfig';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
export  default  class web extends Component {
    static navigationOptions = {
        header:({navigation}) =>{
            return (
                <ImageBackground style={{ ...header }}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {
                    navigation.goBack(null);
                }}>
                    <View style={{justifyContent:'center',marginLeft:10,alignItems:'center',height:43.7}}>
                        <IconSimple name="arrow-left" size={20}/>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize:16,textAlign:'center',fontWeight:'100',lineHeight:43.7}}> {navigation.state.routes[navigation.state.index].params && navigation.state.routes[navigation.state.index].params.WebTitle}</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                }}>
                    <View style={{justifyContent:'center',marginRight:10,alignItems:'center',height:43.7,backgroundColor:'transparent',width:20}}>
                    </View>
                </TouchableOpacity>
                </ImageBackground>
            )
        }

    };
    constructor(props) {
        super(props);
        this.state = {
            cookies    : {},
            webViewUrl : ''
        }
    }
    onNavigationStateChange(e) {
        this.props.navigation.setParams({
            WebTitle: e.title
        });
    }
//this.props.navigation.state.params.data.content && JSON.parse(this.props.navigation.state.params.data.content).content
    componentDidMount() {
        if (this.props.navigation.state.params && this.props.navigation.state.params.url){
            this.pubLishUrl = this.props.navigation.state.params.url;
            console.log('publishUrl',this.pubLishUrl);
        }

    }
    _onMessage = (event) => {
        const { data } = event.nativeEvent;
        const cookies  = data.split(';'); // `csrftoken=...; rur=...; mid=...; somethingelse=...`
        console.log('cookieXXXXXX',cookies);

        cookies.forEach((cookie) => {
            const c = cookie.trim().split('=');

            const new_cookies = this.state.cookies;
            new_cookies[c[0]] = c[1];

            this.setState({ cookies: new_cookies });
        });

       // this._checkNeededCookies();
    }
    render() {
        return (
            <WebView source={{uri: this.pubLishUrl}} onNavigationStateChange={(e) => {
                this.onNavigationStateChange(e)
            }} startInLoadingState={true} />
        );
    }
    _onRefresh = () =>{};
}
const header = {
    backgroundColor: '#fff',
    borderBottomColor:'#f5f5f5',
    borderBottomWidth:1,
    ...ifIphoneX({
        paddingTop: 44,
        height: 88
    }, {
        paddingTop: Platform.OS === "ios" ? 20 : SCALE(StatusBarHeight()),
        height:64,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end'
}





