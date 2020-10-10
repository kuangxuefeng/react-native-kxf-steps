import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Steps extends Component {
    render() {
        const {
            style,
            datas,//数据，对象
            orientation = 'horizontal',//方向，horizontal,vertical
            connlineLengt = 80,//连接线的长度
            connlineWidth = 2,//连接线的宽度
            iconSize = 40,//icon的大小
            titlesFontSize = 10,
            titlesMarginTop = 4,//标题距离icon的宽度
            infosMarginTop = 4,//提示信息距离标题的宽度
            titlesWidth = 80,//title栏每个标题的宽度
            titlesItemStyle,//标题栏文本的样式
            infosItemStyle,//提示文本的样式
        } = this.props

        const titlesMarginItem = connlineLengt + iconSize - (orientation == 'horizontal' ? titlesWidth : titlesFontSize/2)

        console.debug(`titlesMarginItem === ${titlesMarginItem}`)

        const itemFlexDiretion = orientation == 'horizontal' ? 'row' : 'column'

        const mystyles = StyleSheet.create({
            container: {
                flexDirection: orientation ? (orientation == 'horizontal' ? 'column' : 'row') : styles.flexDirection,
            },
            item_top: {
                flexDirection: orientation ? itemFlexDiretion : styles.flexDirection,
                flex: 1,
            },
            item: {
                flexDirection: orientation ? itemFlexDiretion : styles.flexDirection,
                justifyContent: 'space-evenly',
            },
            item_title_txt: {
                width: titlesWidth,
                fontSize: titlesFontSize,
            },
            item_title_txt_margin_h: {
                position:'relative',
                marginRight: titlesMarginItem,
            },
            item_title_txt_margin_v: {
                position:'relative',
                marginTop: titlesMarginItem,
            },
            infos: {
                marginTop: infosMarginTop,
            },
            titles: {
                marginTop: titlesMarginTop,
            },
            item_icon_line: {
                flexDirection: itemFlexDiretion,
                justifyContent: 'center',
                alignItems: 'center',
            },
            item_icon: {
                width: iconSize,
                height: iconSize,
                backgroundColor: 'red',
                borderRadius: iconSize / 2,
                alignItems: 'center',
                justifyContent: 'center',
            },
            item_connline: {
                backgroundColor: 'green',
                width: orientation == 'horizontal' ? connlineLengt : connlineWidth,
                height: orientation == 'horizontal' ? connlineWidth : connlineLengt,
            },
        });

        const _getTitleItemsStyle = (index) => {
            if (orientation == 'horizontal') {
                if (index < datas.titles.length - 1) {
                    return mystyles.item_title_txt_margin_h
                } else {
                    return null
                }
            } else {
                if (index == 0) {
                    return null
                } else {
                    return mystyles.item_title_txt_margin_v
                }
            }
            

        }

        const _getTitleItems = (item, index) => {
            console.debug(`${index} === ${item}`)
            return (<Text key={index.toString()} style={[mystyles.item_title_txt, _getTitleItemsStyle(index), titlesItemStyle]}>{item}</Text>)
        }

        const _getInfoItems = (item, index) => {
            console.debug(`${index} === ${item}`)
            return (<Text key={index.toString()} style={[mystyles.item_title_txt, _getTitleItemsStyle(index), infosItemStyle]}>{item}</Text>)
        }

        const _getIconAndConnectLineItems = (item, index) => {
            console.debug(`_getIconAndConnectLineItems ${index} === ${item}`)
            return (<View key={index.toString()} style={[mystyles.item_icon_line]}>
                <View style={[mystyles.item_icon]}><Text>{index + 1}</Text></View>
                {(index < datas.titles.length - 1) && (<View style={[mystyles.item_connline]}></View>)}
            </View>)
        }

        return (orientation == 'horizontal') ? (
            //横向
            <View style={[style, mystyles.container]}>
                <View style={[mystyles.item_top]}>
                    {datas && datas.titles && datas.titles.map(_getIconAndConnectLineItems)}
                </View>
                <View style={[mystyles.item]}>
                    {datas && datas.titles && datas.titles.map(_getTitleItems)}
                </View>
                <View style={[mystyles.item]}>
                    {datas && datas.infos && datas.infos.map(_getInfoItems)}
                </View>

            </View>

        ) :
            (
                //纵向
                <View style={[style, mystyles.container]}>
                    <View style={[mystyles.item_top]}>
                        {datas && datas.titles && datas.titles.map(_getIconAndConnectLineItems)}
                    </View>
                    <View style={[mystyles.item]}>
                        {datas && datas.titles && datas.titles.map(_getTitleItems)}
                    </View>
                    <View style={[mystyles.item]}>
                        {datas && datas.infos && datas.infos.map(_getInfoItems)}
                    </View>

                </View>

            )
    }
}