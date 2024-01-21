import RecruitSearch from "../components/profile/recruitSearch";
import DevProfile from "../components/profile/dev_profile";
import { Stack, router } from "expo-router";
import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

const Recuriter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      name: "Alex Johnson",
      techStack: ["JavaScript ", "React ", "Node.js "],
      overallScore: 290,
    },
    {
      name: "Emily Smith",
      techStack: ["Python ", "Django ", "Flask "],
      overallScore: 340,
    },
    {
      name: "Ryan Patel",
      techStack: ["Java ", "Spring ", "Hibernate "],
      overallScore: 440,
    },
    {
      name: "Jessica Lee",
      techStack: ["C# ", ".NET ", "SQL Server"],
      overallScore: 413,
    },
    {
      name: "Daniel Wang",
      techStack: ["Ruby ", "Rails ", "PostgreSQL"],
      overallScore: 390,
    },
    {
      name: "Ava Garcia",
      techStack: ["Swift ", "iOS ", "Core Data"],
      overallScore: 377,
    },
    {
      name: "Mason Kim",
      techStack: ["PHP ", "Laravel ", "MySQL"],
      overallScore: 383,
    },
    {
      name: "Olivia Nguyen",
      techStack: ["Angular ", "TypeScript ", "Express"],
      overallScore: 427,
    },
    {
      name: "Ethan Patel",
      techStack: ["Vue.js ", "Nuxt.js ", "Firebase"],
      overallScore: 397,
    },
    {
      name: "Isabella Wang",
      techStack: ["Go ", "Gin ", "MongoDB"],
      overallScore: 407,
    },
  ];
  return (
    <SafeAreaView className="bg-[#120126]">
      <Stack.Screen options={{ title: "Recruiter", headerShown: false }} />

      <ScrollView>
        <View className="">
          <RecruitSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
        </View>

        {data.map((item, i) => (
          <DevProfile
            key={i}
            devName={item.name}
            techStack={item.techStack}
            score={item.overallScore}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recuriter;
