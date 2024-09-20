import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";

import { line_sp_01_current, line_sp_02_current, line_sp_03_current, line_sp_04_current } from '../../state/data_Test';

const Create = () => {
  const ref1 = useRef(null);


  const lineData1 = line_sp_01_current

  const lineData2 = line_sp_02_current

  const lineData3 = line_sp_03_current

  const lineData4 = line_sp_04_current

  const months1 = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];


  const showOrHidePointer1 = (index) => {
    ref1.current?.scrollTo({
      x: index * 200 - 25, // Adjust according to your UI
    });
  };


  ///////////////////////////////              QUAL A DIFERENÇA ENTRE USAR CLASSNAME={}       E UTILIZAR STYLE={{}}
  return (
    <ScrollView>
      <View className="mt-10 ml-4">
        <View className="mb-5 mt-10">
          <Text className="text-2xl text-secondary-400 font-bold text-center">
            Solar Panels chart:
          </Text>
        </View>
        {/* First chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10,}}>
          {months1.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#86abe1',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer1(index)}
            >
              <Text>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <LineChart
          scrollRef={ref1}
          data={lineData1}
          data2={lineData2}
          data3={lineData3}
          data4={lineData4}
          curved
          color1="skyblue"
          color2="orange"
          color3="red"
          color4='green'
          initialSpacing={20}
          maxValue={0.6} // Valor máximo no eixo Y
          yAxisOffset={-0.05}
          rotateLabel
          noOfSections={5}
          xAxisLabelsVerticalShift={15}
        />


<View className="mb-5  mt-10">
          <Text className="text-2xl text-secondary-400 font-bold text-center">
            Solar Panels chart:
          </Text>
        </View>
        {/* First chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10,}}>
          {months1.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#86abe1',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer1(index)}
            >
              <Text>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <LineChart
          scrollRef={ref1}
          data={lineData1}
          data2={lineData2}
          data3={lineData3}
          data4={lineData4}
          curved
          color1="skyblue"
          color2="orange"
          color3="red"
          color4='green'
          initialSpacing={20}
          maxValue={0.6} // Valor máximo no eixo Y
          rotateLabel
        />
        
      </View>
    </ScrollView>
    
  );
};

export default Create;
