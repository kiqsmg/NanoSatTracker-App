import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from 'react-native-safe-area-context';

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
      x: index * 200 - 25,
    });
  };
  const showOrHidePointer2 = (index) => {
    ref2.current?.scrollTo({
      x: index * 200 - 25,
    });
  };

  return (
    <SafeAreaView className="bg-black">
      <ScrollView>
        <View className="mt-10 ml-4">
          <View className="mb-5 mt-10">
            <Text className="text-2xl text-blue-100 font-bold text-center mb-5">
              Solar Panels current:
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-01 [A]: blue
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-02 [A]: orange
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-03 [A]: red
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-04 [A]: green
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-05 [A]: yellow
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-06 [A]: pink
            </Text>

            {/* First chart*/}
            <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10, marginTop: 10,}}>
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
            <View style={{ marginRight: 5, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
              <LineChart
                scrollRef={ref1}
                data={lineData1}
                data2={lineData2}
                data3={lineData3}
                data4={lineData4}
                data5={lineData5}
                data6={lineData6}
                curved
                color1="blue"
                color2="orange"
                color3="red"
                color4='green'
                color5="yellow"
                color6="pink"
                initialSpacing={20}
                maxValue={0.6}
                yAxisOffset={-0.05}
                rotateLabel
                noOfSections={6}
                xAxisLabelsVerticalShift={15}
              />
            </View>          
          </View>
          <View className="mb-5 mt-10">
            <Text className="text-2xl text-blue-100 font-bold text-center mb-5">
              Solar Panels voltage:
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-01-02 [V]: blue
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-03-04 [V]: orange
            </Text>
            <Text className=" text-blue-300 font-bold">
              Solar Panel-05-06 [V]: red
            </Text>

            {/* Second chart*/}
            <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10, marginTop: 10,}}>
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
            <View style={{ marginRight: 5, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
              <LineChart
                scrollRef={ref2}
                data={lineData7}
                data2={lineData8}
                data3={lineData9}
                curved
                color1="blue"
                color2="orange"
                color3="red"
                initialSpacing={20}
                maxValue={6}
                yAxisOffset={-0.05}
                rotateLabel
                noOfSections={6}
                xAxisLabelsVerticalShift={15}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SolarPanel;
