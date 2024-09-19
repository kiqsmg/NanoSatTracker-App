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

  return (
    <ScrollView>
      <View>
        {/* First chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 5,}}>
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
          initialSpacing={20}
          dataPointsColor1="blue"
          dataPointsColor2="red"
          startFillColor1="skyblue"
          startFillColor2="orange"
          maxValue={0.6} // Valor máximo no eixo Y
          rotateLabel
        />
        
      </View>
    </ScrollView>
    
  );
};

export default Create;
