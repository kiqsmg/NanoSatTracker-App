import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from 'react-native-safe-area-context';

import { line_battery_cell_1_voltage, line_battery_cell_2_voltage, line_battery_charge, line_battery_current, line_battery_temperature} from '../../state/data_Test';


const Battery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formattedData, setFormattedData] = useState([]);


  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    console.log("Fetching data...");
  
    fetch("https://nanosattracker-backend.onrender.com/floripasat1/downlink")
      .then(res => {
        console.log("Response received:", res);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((received_Data) => {
        console.log("Data received:", received_Data);
  

        // Filtering the data as per your logic
        const line_battery_cell_1_voltage = received_Data.map(item => ({
          value: item.battery_cell_1_voltage,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_battery_cell_2_voltage = received_Data.map(item => ({
            value: item.battery_cell_2_voltage,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_battery_temperature = received_Data.map(item => ({
            value: item.battery_temperature,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_battery_charge = received_Data.map(item => ({
            value: item.battery_charge,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_battery_current = received_Data.map(item => ({
            value: item.battery_current,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));


        // Now set this data to state
        setFormattedData([
          { data: line_battery_cell_1_voltage },
          { data: line_battery_cell_2_voltage },
          { data: line_battery_temperature },
          { data: line_battery_charge },
          { data: line_battery_current },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);


  if (isLoading) {
    return <ActivityIndicator size="large" color="#0e580e" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  
  const lineData1 = formattedData[0]?.data || [];
  const lineData2 = formattedData[1]?.data || [];
  const lineData3 = formattedData[2]?.data || [];
  const lineData4 = formattedData[3]?.data || [];
  const lineData5 = formattedData[4]?.data || [];
  

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
  const showOrHidePointer3 = (index) => {
    ref3.current?.scrollTo({
      x: index * 200 - 25,
    });
  };

  return (
    <SafeAreaView className="bg-black">
      <ScrollView>
        <View className="mt-10 ml-4">
          <View className="mb-5 mt-10">
            <Text className="text-2xl text-blue-100 font-bold text-center mb-5">Batteries voltage:</Text>
            <Text className=" text-blue-300 font-bold">Cell 01 voltage [V]: blue</Text>
            <Text className=" text-blue-300 font-bold">Cell 02 voltage [V]: orange</Text>

            {/* First chart*/}
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
            <View style={{ marginRight: 5, paddingBottom: 30, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
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
            <Text className="text-2xl text-blue-100 font-bold text-center mb-5">Batteries charge & current:</Text>
            <Text className=" text-blue-300 font-bold">Charge: blue</Text>
            <Text className=" text-blue-300 font-bold">Current [A]: orange</Text>

            {/* Second chart*/}
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
            <View style={{marginRight: 5, paddingBottom: 30, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
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
            <Text className="text-2xl text-blue-100 font-bold text-center mb-5">Batteries temperature:</Text>
            <Text className=" text-blue-300 font-bold">Temperature [ºC]: blue</Text>

            {/* Third chart*/}
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
            <View style={{marginRight: 5, paddingBottom: 30, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
              <LineChart
                scrollRef={ref3}
                data={lineData5}
                curved
                color1="blue"
                initialSpacing={20}
                maxValue={20}
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
