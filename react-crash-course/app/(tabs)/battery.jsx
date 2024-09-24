import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";

import { line_battery_cell_1_voltage, line_battery_cell_2_voltage, line_battery_charge, line_battery_current, line_battery_temperature} from '../../state/data_Test';
import { SafeAreaView } from 'react-native-safe-area-context';


const Battery = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  
  const lineData1 = line_battery_cell_1_voltage

  const lineData2 = line_battery_cell_2_voltage

  const lineData3 = line_battery_charge

  const lineData4 = line_battery_current

  const lineData5 = line_battery_temperature


  const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];

  const showOrHidePointer1 = (index) => {
    ref1.current?.scrollTo({
      x: index * 200 - 25, //Adjust according to your UI
    });
  };
  const showOrHidePointer2 = (index) => {
    ref2.current?.scrollTo({
      x: index * 200 - 25, //Adjust according to your UI
    });
  };
  const showOrHidePointer3 = (index) => {
    ref3.current?.scrollTo({
      x: index * 200 - 25, //Adjust according to your UI
    });
  };

  return (
    <SafeAreaView className="bg-black">
          <ScrollView>
      <View className="mt-10 ml-4">
      <View className="mb-5 mt-10">
          <Text className="text-2xl text-blue-100 font-bold text-center mb-5">
            Batteries voltage:
          </Text>
          <Text className=" text-blue-300 font-bold">
            Cell 01 voltage [V]: blue
          </Text>
          <Text className=" text-blue-300 font-bold">
            Cell 02 voltage [V]: orange
          </Text>


                  {/* First chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10,  marginTop: 10,}}>
          {month.map((month, index1) => (
            <TouchableOpacity
              key={index1}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#86abe1',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer1(index1)}
            >
              <Text>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginRight: 5, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
          <LineChart
            color="#fdfdfd"          
            scrollRef={ref1}
            data={lineData1}
            data2={lineData2}
            curved
            color1="blue"
            color2="orange"
            initialSpacing={20}
            maxValue={1}
            yAxisOffset={3.5}
            rotateLabel
            noOfSections={6}
            xAxisLabelsVerticalShift={15}
          />
        </View>
      </View>

      <View className="mb-5 mt-10">
          <Text className="text-2xl text-blue-100 font-bold text-center mb-5">
            Batteries charge & current:
          </Text>
          <Text className=" text-blue-300 font-bold">
            Charge: blue
          </Text>
          <Text className=" text-blue-300 font-bold">
            Current [A]: orange
          </Text>


                  {/* Second chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10,  marginTop: 10,}}>
          {month.map((month, index2) => (
            <TouchableOpacity
              key={index2}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#86abe1',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer2(index2)}
            >
              <Text>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{marginRight: 5, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
        <LineChart
          scrollRef={ref2}
          data={lineData3}
          data2={lineData4}
          curved
          color1="blue"
          color2="orange"
          initialSpacing={20}
          maxValue={22}
          yAxisOffset={-1}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={15}
        />
        </View>
        
      </View>

      <View className="mb-5 mt-10">
          <Text className="text-2xl text-blue-100 font-bold text-center mb-5">
            Batteries temperature:
          </Text>
          <Text className=" text-blue-300 font-bold">
            Temperature [ºC]: blue
          </Text>


                  {/* Third chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10,  marginTop: 10,}}>
          {month.map((month, index3) => (
            <TouchableOpacity
              key={index3}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#86abe1',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer3(index3)}
            >
              <Text>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{marginRight: 5, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
        <LineChart
          scrollRef={ref3}
          data={lineData5}
          curved
          color1="blue"
          initialSpacing={20}
          maxValue={20} // Valor máximo no eixo Y
          yAxisOffset={0}
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
export default Battery;
