/**
 * Created by zhangzuohua on 2018/1/18.
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
    FlatList
} from 'react-native';
import { ifIphoneX } from '../../utils/iphoneX';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import RadioModal from 'react-native-radio-master';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export  default  class Detail extends Component {
    static navigationOptions = {
        tabBarLabel: '发布网名',
        tabBarIcon: ({ tintColor, focused }) => (
            <MaterialIcons name="add-circle-outline" size={26} color={focused ? "red" : '#666'} />
        ),
        header: ({ navigation }) => {
            return (
                <ImageBackground style={{ ...header }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => {
                        navigation.goBack(null);
                    }}>
                        <View style={{ justifyContent: 'center', marginLeft: 10, alignItems: 'center', height: 43.7 }}>
                            <IconSimple name="arrow-left" size={20} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, textAlign: 'center', lineHeight: 43.7, fontWeight: '300' }}>发布网名</Text>
                    <View style={{ justifyContent: 'center', marginRight: 10, alignItems: 'center', height: 43.7 }}></View>
                </ImageBackground>
            )
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            classid:'0'
        };
    }
    componentDidMount() {
    }
    renderTabBar = (params) => {
        global.activeTab = params.activeTab;
        this.state.sectionList.forEach((v, i) => {
            if (i === params.activeTab) {
                global.activeClassId = v.classid
            }
        })

        return <ScrollableTabBar
            activeTextColor='red'
            underlineStyle={{ height: 0, width: 0 }}
            backgroundColor='white'
            style={{ marginLeft: 45, marginRight: 45 }}
            textStyle={{
                fontSize: 16,
                fontWeight: '100'
            }}
            tabStyle={{
                paddingLeft: 10,
                paddingRight: 10
            }}
        />;
    }
    render() {
        return (
            <View>
                <Text>{this.state.classid}</Text>
                <RadioModal
                    selectedValue={this.state.classid}
                    onValueChange={(id,item) => this.setState({classid: id,initItem:item})}
                    style={{ flexDirection:'row',
                        flexWrap:'wrap',
                        alignItems:'flex-start',
                        flex:1,
                        backgroundColor:'#ffffff',padding:5,marginTop:10
                        }} 
                    >
				  <Text value="0">选项a</Text>
				  <Text value="1" disabled="true">选项b</Text>
				  <Text value="2">选项c</Text>
				  <Text value="3">选项d</Text>
			   </RadioModal>
            </View>
        );
    }
}


const header = {
    backgroundColor: '#fff',
    ...ifIphoneX({
        paddingTop: 44,
        height: 88
    }, {
            paddingTop: Platform.OS === "ios" ? 20 : SCALE(StatusBarHeight()),
            height: 64,
        }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
}


