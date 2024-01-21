import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

// import {
//   Company,
//   JobAbout,
//   JobFooter,
//   JobTabs,
//   Specifics,
// } from "../../components/jobs-page";

import useFetch from "../../hook/useFetch";
import Company from "../../components/jobs-page/company";
import JobAbout from "../../components/jobs-page/about";
import JobFooter from "../../components/jobs-page/footer";
import Specifics from "../../components/jobs-page/specifics";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView
      className="bg-[#120126]"
      style={{ backgroundColor: "#120126" }}
    >
      <Stack.Screen
        options={{ title: "", headerShown: false, statusBarColor: "#120126" }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="#312651" />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: 12, paddingBottom: 100 }}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
                city={data[0].job_city}
              />

              <JobAbout info={data[0].job_description ?? "No data provided"} />
              <Specifics
                title="Qualifications"
                points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
              />

              <Specifics
                title="Responsibilities"
                points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
              />
            </View>
          )}
        </ScrollView>

        <JobFooter
          url={
            data[0]?.job_google_link ??
            "https://careers.google.com/jobs/results/"
          }
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
