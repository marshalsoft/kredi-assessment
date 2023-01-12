import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import {
    BarChart, LineChart, PieChart
  } from "react-native-gifted-charts";
import CONSTANTS from '../includes/constants';
  interface ChartProps {
    cwidth:any;
    cheight:any
  }
export default function ChartView({cwidth = 60,cheight = 60}:ChartProps) {
    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, 
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      };
      let data:any[] =[
        {value: 70, color:"#FEC640"},
        {value: 30, color: "#3D4B5E"}
      ];
    return (
    <View  style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
    <PieChart
    data={data}
    donut
    innerRadius={20}
    radius={25}
    focusOnPress
    initialAngle={25.3}
    centerLabelComponent={() => {
      return <View style={{width:40,height:40,justifyContent:"center",alignItems:"center",borderRadius:100,backgroundColor:"#3D4B5E"}}><Text style={{fontSize:12,color:"white"}}>{data[0].value}%</Text></View>;
    }}
  />
    </View>)
}