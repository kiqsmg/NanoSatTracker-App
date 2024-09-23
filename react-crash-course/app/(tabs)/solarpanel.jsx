import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";

import { line_sp_01_current, line_sp_02_current, line_sp_03_current, line_sp_04_current, line_sp_05_current, line_sp_06_current, line_sp_01_02_voltage, line_sp_03_04_voltage, line_sp_05_06_voltage } from '../../state/data_Test';

const SolarPanel = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);



  const lineData1 = line_sp_01_current

  const lineData2 = line_sp_02_current

  const lineData3 = line_sp_03_current

  const lineData4 = line_sp_04_current
  
  const lineData5 = line_sp_05_current

  const lineData6 = line_sp_06_current

  const lineData7 = line_sp_01_02_voltage

  const lineData8 = line_sp_03_04_voltage

  const lineData9 = line_sp_05_06_voltage


  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];

  const showOrHidePointer1 = (index) => {
    ref1.current?.scrollTo({
      x: index * 200 - 25, // Adjust according to your UI
    });
  };
  const showOrHidePointer2 = (index) => {
    ref2.current?.scrollTo({
      x: index * 200 - 25, // Adjust according to your UI
    });
  };


  ///////////////////////////////              QUAL A DIFERENÇA ENTRE USAR CLASSNAME={}       E UTILIZAR STYLE={{}}
  return (
    <ScrollView>
      <View className="mt-10 ml-4">
        <View className="mb-5 mt-10">
          <Text className="text-2xl text-secondary-400 font-bold text-center">
            Solar Panels current:
          </Text>


                  {/* First chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10,}}>
          {month.map((month, index) => (
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
          data5={lineData5}
          data6={lineData6}
          curved
          color1="skyblue"
          color2="orange"
          color3="red"
          color4='green'
          color5="yellow"
          color6="pink"
          initialSpacing={20}
          maxValue={0.6} // Valor máximo no eixo Y
          yAxisOffset={-0.05}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={15}
        />
        </View>

        <View className="mb-5 mt-10">
          <Text className="text-2xl text-secondary-400 font-bold text-center">
            Solar Panels voltage:
          </Text>


                  {/* Second chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10,}}>
          {month.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#86abe1',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer2(index)}
            >
              <Text>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <LineChart
          scrollRef={ref2}
          data={lineData7}
          data2={lineData8}
          data3={lineData9}
          curved
          color1="skyblue"
          color2="orange"
          color3="red"
          color4='green'
          color5="yellow"
          color6="pink"
          initialSpacing={20}
          maxValue={6} // Valor máximo no eixo Y
          yAxisOffset={-0.05}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={15}
        />
        </View>


      </View>
    </ScrollView>
    
  );
};

export default SolarPanel;
