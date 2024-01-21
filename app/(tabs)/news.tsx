import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-elements";
import NewsDetails from "../newsDetails";

const data = [
  {
    heading: "Revolutionizing Web Development with Deno 2.0",
    content:
      "The Deno runtime, created by Ryan Dahl, the original developer of Node.js, has reached a major milestone with the release of Deno 2.0. This update brings enhanced performance, improved APIs, and expanded compatibility. Developers can now build secure and efficient server-side applications with features like Web Storage API support and the Deno Deploy service for seamless deployment.\n\nDeno 2.0 introduces a range of improvements, including an upgraded V8 engine, better TypeScript support, and enhanced module resolution. With its focus on security and developer experience, Deno continues to shape the future of server-side JavaScript and TypeScript development.",
  },
  {
    heading: "The Rise of SwiftUI in Modern iOS App Development",
    content:
      "SwiftUI has become a game-changer for iOS developers, providing a declarative syntax for building user interfaces across all Apple platforms. With the recent release of SwiftUI 3.0, developers gain access to new features such as improved List views, cross-platform controls, and enhanced performance optimizations. The framework simplifies complex UI code, accelerates development workflows, and promotes a unified codebase for iOS, macOS, watchOS, and tvOS apps.\n\nIn SwiftUI 3.0, developers can leverage the new ListHeaderView and ListFooterView components to enhance the visual appeal of lists. Additionally, the improved handling of async/await patterns in SwiftUI asynchronous code promises to streamline the development of responsive and scalable iOS applications.",
  },
  {
    heading: "Evolving JavaScript Ecosystem: ECMAScript 2023 Features",
    content:
      "The ECMAScript standard, which defines the scripting language specifications for JavaScript, has unveiled its latest features in ECMAScript 2023. This update introduces advancements like record and tuple types, improved nullish coalescing, and the introduction of pipeline operators. JavaScript developers can now write more expressive and concise code while taking advantage of powerful new language capabilities.\n\nWith the new record and tuple types, developers can define structured data with ease, promoting better code organization and readability. Additionally, the pipeline operators simplify complex data transformations, making code more modular and maintainable. The ECMAScript 2023 features represent a step forward in evolving JavaScript as a versatile and modern programming language.",
  },
  {
    heading: "Building Cross-Platform Apps with Flutter 2.5",
    content:
      "Flutter, Google's UI toolkit for building natively compiled applications, has released version 2.5 with exciting updates for developers. Flutter 2.5 focuses on enhancing performance, improving accessibility, and providing new tools for developers to create stunning cross-platform applications.\n\nOne notable feature is the improved support for Material You, allowing developers to seamlessly integrate their apps with the latest design principles on Android. Additionally, Flutter 2.5 introduces the new 'dart migrate' tool, making it easier for developers to migrate their code to the latest Dart language features while ensuring compatibility with the Flutter framework.",
  },
  {
    heading: "Empowering Microservices with gRPC 1.0",
    content:
      "gRPC, the high-performance, open-source framework for building remote procedure call (RPC) APIs, has reached version 1.0, marking a stable release for developers. With gRPC 1.0, developers can seamlessly build efficient and scalable microservices architectures, leveraging features such as bidirectional streaming, pluggable authentication, and support for multiple programming languages.\n\nIncorporating gRPC into microservices enables developers to establish communication between services in a language-agnostic manner, promoting interoperability and flexibility. The 1.0 release signifies the maturity of gRPC as a reliable choice for building modern, distributed systems.",
  },
  {
    heading: "Next-Gen Data Processing with Apache Flink 1.14",
    content:
      "Apache Flink, the stream processing framework, has released version 1.14, introducing advanced features for next-gen data processing. Developers working with real-time data analytics and event-driven applications can benefit from the improved event time processing, enhanced state management, and new connectors available in Apache Flink 1.14.\n\nOne notable addition is the support for SQL temporal tables, enabling developers to model and query temporal data with ease. Apache Flink continues to be a go-to solution for organizations seeking high-throughput, low-latency data processing in a distributed environment.",
  },
  {
    heading: "Enhancing Accessibility in React 18",
    content:
      "React, the popular JavaScript library for building user interfaces, has released version 18 with a focus on improving accessibility and developer experience. React 18 introduces new features like automatic batching, concurrent rendering improvements, and a new root API to enable more granular control over updates. These enhancements aim to make React applications more responsive and accessible.\n\nDevelopers can now leverage automatic batching to optimize performance by reducing the number of renders. Additionally, concurrent rendering improvements enhance the responsiveness of React applications, ensuring a smoother user experience. React 18 is a significant step forward in the evolution of the library.",
  },
  {
    heading: "Boosting Productivity with VS Code 2.0",
    content:
      "Visual Studio Code, the popular open-source code editor, has reached version 2.0 with a plethora of new features aimed at boosting developer productivity. VS Code 2.0 introduces improved language support, enhanced debugging capabilities, and a revamped extension marketplace for developers to discover and install extensions seamlessly.\n\nOne notable feature is the introduction of 'Workspaces 2.0,' providing developers with a more flexible and customizable workspace experience. With enhanced Git integration and a more efficient IntelliCode, Visual Studio Code 2.0 continues to be a preferred choice for developers across various programming languages.",
  },
  {
    heading: "Exploring Cloud-Native Development with Kubernetes 1.23",
    content:
      "Kubernetes, the open-source container orchestration platform, has released version 1.23, bringing new features and improvements for cloud-native development. With enhanced support for declarative application management, fine-grained control over resources, and improved scalability, Kubernetes 1.23 continues to empower developers to build and deploy resilient, containerized applications at scale.\n\nThe introduction of 'Dynamic Audit Policy' allows administrators to define and update audit policies dynamically, enhancing security and compliance. Additionally, the enhanced 'Vertical Pod Autoscaling' feature ensures optimal resource allocation, further optimizing the performance of applications running on Kubernetes clusters.",
  },
  {
    heading: "Securing Web Applications with OAuth 2.1",
    content:
      "OAuth, the widely used open standard for access delegation, has released version 2.1, introducing new features to enhance security in web applications. OAuth 2.1 includes improvements such as stricter security requirements, enhanced token validation, and improved guidance for developers implementing the protocol. These enhancements aim to provide a more robust and secure foundation for identity and access management in modern web applications.\n\nDevelopers can now benefit from increased security measures, including mandatory PKCE (Proof Key for Code Exchange) for authorization code flows. OAuth 2.1 represents a step forward in addressing security challenges and ensuring.",
  },
];
function News() {
  return (
    <ScrollView>
      <View>
        {data.map((item, i) => (
          <NewsDetails key={i} heading={item.heading} content={item.content} />
        ))}
      </View>
    </ScrollView>
  );
}

export default News;
