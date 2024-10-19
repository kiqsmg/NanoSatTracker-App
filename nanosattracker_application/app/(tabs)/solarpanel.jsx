import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from 'react-native-safe-area-context';

const SolarPanel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formattedData, setFormattedData] = useState([]);

  const ref1 = useRef(null);
  const ref2 = useRef(null);


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
        const line_sp_01_current = received_Data.map(item => ({
          value: item.sp_01_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_02_current = received_Data.map(item => ({
          value: item.sp_02_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_03_current = received_Data.map(item => ({
          value: item.sp_03_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_04_current = received_Data.map(item => ({
          value: item.sp_04_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_05_current = received_Data.map(item => ({
          value: item.sp_05_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_06_current = received_Data.map(item => ({
          value: item.sp_06_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));

        const line_sp_01_02_voltage = received_Data.map(item => ({
          value: item.sp_01_02_voltage,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_sp_03_04_voltage = received_Data.map(item => ({
            value: item.sp_03_04_voltage,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_sp_05_06_voltage = received_Data.map(item => ({
            value: item.sp_05_06_voltage,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));


        // Now set this data to state
        setFormattedData([
          { data: line_sp_01_current },
          { data: line_sp_02_current },
          { data: line_sp_03_current },
          { data: line_sp_04_current },
          { data: line_sp_05_current },
          { data: line_sp_06_current },
          { data: line_sp_01_02_voltage },
          { data: line_sp_03_04_voltage },
          { data: line_sp_05_06_voltage },
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
  const lineData6 = formattedData[5]?.data || [];
  const lineData7 = formattedData[6]?.data || [];
  const lineData8 = formattedData[7]?.data || [];
  const lineData9 = formattedData[8]?.data || [];


  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

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
            <Text className="text-2xl text-blue-100 font-bold text-center mb-5">Solar Panels current:</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-01 [A]: blue</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-02 [A]: orange</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-03 [A]: red</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-04 [A]: green</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-05 [A]: yellow</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-06 [A]: pink</Text>

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
            <View style={{ marginRight: 5, paddingBottom: 60, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
              <LineChart
                scrollRef={ref1}
                data={lineData1}
                data2={lineData2}
                data3={lineData3}
                data4={lineData4}
                data5={lineData5}
                data6={lineData6}
                curved
                isAnimated
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
                xAxisLabelsVerticalShift={20}
                xAxisLabelTextStyle={{
                  alignSelf: 'flex-end',
                  marginRight: -35,
                  marginTop: -25,
                }}
              />
            </View>     
          </View>
          <View className="mb-5 mt-10">
            <Text className="text-2xl text-blue-100 font-bold text-center mb-5">Solar Panels voltage:</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-01-02 [V]: blue</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-03-04 [V]: orange</Text>
            <Text className=" text-blue-300 font-bold">Solar Panel-05-06 [V]: red</Text>

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
            <View style={{ marginRight: 5, paddingBottom: 60, padding:5, borderRadius: 10, backgroundColor: '#ffffff'}}>
              <LineChart
                scrollRef={ref2}
                data={lineData7}
                data2={lineData8}
                data3={lineData9}
                curved
                isAnimated
                color1="blue"
                color2="orange"
                color3="red"
                initialSpacing={20}
                maxValue={6}
                yAxisOffset={-0.5}
                rotateLabel
                noOfSections={6}
                xAxisLabelsVerticalShift={20}
                xAxisLabelTextStyle={{
                  alignSelf: 'flex-end',
                  marginRight: -35,
                  marginTop: -25,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SolarPanel;

