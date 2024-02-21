import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Textarea, VStack, useToast, Alert, AlertIcon, Divider } from "@chakra-ui/react";
import { FaRobot, FaUpload, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [clickstreamData, setClickstreamData] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const toast = useToast();

  const handleDataChange = (event) => {
    setClickstreamData(event.target.value);
  };

  const handleFileChange = (event) => {
    // TODO: Implement file reading logic
    toast({
      title: "File upload",
      description: "This is a mockup. Implement file reading logic here.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const analyzeData = () => {
    setIsAnalyzing(true);

    // Mock analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      // Mock result
      setAnalysisResult({
        detected: true,
        confidence: 0.95,
      });
    }, 2000);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Bot Behavior Detector <FaRobot />
        </Heading>
        <Divider />
        <Box w="100%">
          <Input type="file" onChange={handleFileChange} />
        </Box>
        <Textarea placeholder="Paste clickstream data here..." value={clickstreamData} onChange={handleDataChange} size="lg" />
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={analyzeData} isLoading={isAnalyzing} loadingText="Analyzing">
          Analyze Data
        </Button>
        {analysisResult && (
          <Alert status={analysisResult.detected ? "error" : "success"}>
            <AlertIcon />
            {analysisResult.detected ? (
              <>
                <FaRobot /> Bot behavior detected with {analysisResult.confidence * 100}% confidence.
              </>
            ) : (
              <>
                <FaCheckCircle /> No bot behavior detected.
              </>
            )}
          </Alert>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
