import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from "react-native-gifted-charts";

import lineData1_filtered from '../../state/data_Test';

const Create = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);


  const lineData1 = lineData1_filtered

  const lineData2 = [
    {value: 4, label: '1 Jan'},
    {value: 14, label: '10 Jan'},
    {value: 8, label: '20 Jan'},
    {value: 38, label: '30 Jan'},
    {value: 36, label: '1 Feb'},
    {value: 28, label: '10 Feb'},
    {value: 14, label: '20 Feb'},
    {value: 28, label: '28 Feb'},
    {value: 4, label: '1 Mar'},
    {value: 14, label: '10 Mar'},
    {value: 8, label: '20 Mar'},
    {value: 14, label: '30 Mar'},
    {value: 8, label: '1 Apr'},
    {value: 38, label: '10 Apr'},
    {value: 14, label: '20 Apr'},
    {value: 28, label: '30 Apr'},
    {value: 4, label: '1 May'},
    {value: 10, label: '10 May'},
    {value: 8, label: '20 May'},
    {value: 14, label: '30 May'},
    {value: 8, label: '1 Jun'},
    {value: 38, label: '10 Jun'},
    {value: 14, label: '20 Jun'},
    {value: 28, label: '30 Jun'},
    {value: 4, label: '1 Jul'},
    {value: 28, label: '10 Jul'},
    {value: 4, label: '20 Jul'},
    {value: 14, label: '30 Jul'},
  ];

  const lineData3 = [
    {value: 4, label: '1 Jan'},
    {value: 14, label: '10 Jan'},
    {value: 8, label: '20 Jan'},
    {value: 38, label: '30 Jan'},
    {value: 36, label: '1 Feb'},
    {value: 28, label: '10 Feb'},
    {value: 14, label: '20 Feb'},
    {value: 28, label: '28 Feb'},
    {value: 4, label: '1 Mar'},
    {value: 14, label: '10 Mar'},
    {value: 8, label: '20 Mar'},
    {value: 14, label: '30 Mar'},
    {value: 8, label: '1 Apr'},
    {value: 38, label: '10 Apr'},
    {value: 14, label: '20 Apr'},
    {value: 28, label: '30 Apr'},
    {value: 4, label: '1 May'},
    {value: 10, label: '10 May'},
    {value: 8, label: '20 May'},
    {value: 14, label: '30 May'},
    {value: 8, label: '1 Jun'},
    {value: 38, label: '10 Jun'},
    {value: 14, label: '20 Jun'},
    {value: 28, label: '30 Jun'},
    {value: 4, label: '1 Jul'},
    {value: 28, label: '10 Jul'},
    {value: 4, label: '20 Jul'},
    {value: 14, label: '30 Jul'},
  ];

  const months1 = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];
  const months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];
  const months3 = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];


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

  const showOrHidePointer3 = (index) => {
    ref2.current?.scrollTo({
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
          curved
          initialSpacing={20}
          rotateLabel
        />

        {/* Second chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginTop: 50 }}>
          {months2.map((month, index) => (
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
          data={lineData2}
          curved
          initialSpacing={0}
          rotateLabel
        />

        {/* Second chart and month selection */}
        <View style={{ flexDirection: 'row', marginLeft: 8, marginTop: 50 }}>
          {months2.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#86abe1',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer3(index)}
            >
              <Text>{month}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <LineChart
          scrollRef={ref3}
          data={lineData3}
          curved
          initialSpacing={0}
          rotateLabel
        />
      </View>
    </ScrollView>
    
  );
};

export default Create;
