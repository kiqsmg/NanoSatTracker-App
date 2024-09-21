import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";

import { line_battery_cell_1_voltage, line_battery_cell_2_voltage, line_battery_charge, line_battery_current, line_battery_temperature} from '../../state/data_Test';


const Battery = () => {
  
  const lineData1 = line_battery_cell_1_voltage

  const lineData2 = line_battery_cell_2_voltage

  const lineData3 = line_battery_charge

  const lineData4 = line_battery_current

  const lineData5 = line_battery_temperature


  const months1 = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];

  const showOrHidePointer1 = (index) => {
    ref1.current?.scrollTo({
      x: index * 200 - 25, //Adjust according to your UI
    });
  };

  return (
    <ScrollView>
      <View className="mt-10 ml-4">
      <View className="mb-5 mt-10">
          <Text className="text-2xl text-secondary-400 font-bold text-center">
            Batteries voltage:
          </Text>


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
          curved
          color1="skyblue"
          color2="orange"
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
            Batteries charge & current:
          </Text>


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
          data={lineData3}
          data2={lineData4}
          curved
          color1="skyblue"
          color2="orange"
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
            Batteries temperature:
          </Text>


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
          data={lineData5}
          curve
          color1="skyblue"
          initialSpacing={20}
          maxValue={0.6} // Valor máximo no eixo Y
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
export default Battery;
