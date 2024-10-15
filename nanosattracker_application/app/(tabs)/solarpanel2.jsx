import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { SafeAreaView } from 'react-native-safe-area-context';

const SolarPanel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    console.log("Fetching data..."); // Log before fetching

    fetch("https://nanosattracker-backend.onrender.com/floripasat1/downlink")
      .then(res => {
        console.log("Response received:", res); // Log the response
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data); // Log the data received
        const sp_01_currentLine = { data: [] };
        const sp_02_currentLine = { data: [] };
        const sp_03_currentLine = { data: [] };
        const sp_04_currentLine = { data: [] };
        const sp_05_currentLine = { data: [] };
        const sp_06_currentLine = { data: [] };

        setFormattedData([sp_01_currentLine, sp_02_currentLine, sp_03_currentLine, sp_04_currentLine, sp_05_currentLine, sp_06_currentLine]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log any errors
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

  const ref1 = useRef(null);
  const lineData1 = formattedData[0]?.data || [];
  const lineData2 = formattedData[1]?.data || [];
  const lineData3 = formattedData[2]?.data || [];
  const lineData4 = formattedData[3]?.data || [];
  const lineData5 = formattedData[4]?.data || [];
  const lineData6 = formattedData[5]?.data || [];

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  const showOrHidePointer1 = (index) => {
    ref1.current?.scrollTo({
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

            {/* Primeiro gráfico */}
            <View style={{ flexDirection: 'row', marginLeft: 8, marginBottom: 10, marginTop: 10 }}>
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
            <View style={{ marginRight: 5, paddingBottom: 30, padding: 5, borderRadius: 10, backgroundColor: '#ffffff' }}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SolarPanel;
