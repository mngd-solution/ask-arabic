import React from "react";
import "./abyatresult.css";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import axios from "axios";
import { useEffect, useState } from "react";
import { Ref } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

function AbyatResult() {
  const { colorMode } = useColorMode();

  const [search, setSearch] = useState([]);

  const [record, setRecord] = useState([]);

  
  var i = 1;

  const loadRecords = async () => {
    axios.get("http://localhost:3000/Abyat").then((response) => {
      setSearch(response.data);
    });
  };

  useEffect(() => {
    // loadRecords();
  }, []);

  const searchRecords = () => {
    axios
      .get(`http://localhost:3000/Abyat/?baytTwoWithoutHarakat=${record}`)
      .then((response) => {
        setSearch(response.data);
      });

  };

  return (
    <>
      {colorMode === "dark" ? (
        <>
          <Box className="AbyatContainer AbyatContainerDark">
            <h1 className="AbyatContainerTitle"> البحور الشعرية</h1>
            <div className="AbyatContainerCol">
              <div className="AbyatContainerRow">
                <FormControl isRequired>
                  <FormLabel className="AbyatContainerLabel">
                    الشطر الأول
                  </FormLabel>
                  <InputGroup size="md" className="AbyatContainerInputGroup">
                    <Input
                      variant="outline"
                      size="md"
                      id="form1"
                      onChange={(e) => setRecord(e.target.value)}
                      placeholder={`قم بكتابة الشطر الأول هنا..`}
                      className="AbyatContainerInput"
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={<ArrowBackIcon color="gray.300" />}
                      size="md"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel className="AbyatContainerLabel">
                    الشطر الثاني
                  </FormLabel>
                  <InputGroup size="md" className="AbyatContainerInputGroup">
                    <Input
                      variant="outline"
                      id="form2"
                      onChange={(e) => setRecord(e.target.value)}
                      size="md"
                      placeholder={`قم بكتابة الشطر الثاني هنا..`}
                      className="AbyatContainerInput"
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={<ArrowBackIcon color="gray.300" />}
                      size="md"
                    />
                  </InputGroup>
                </FormControl>
              </div>
            </div>
            <p className="AbyatContainerDetails">
              اكتب اول أبيات القصيدة ثم اضغط على بحث للحصول على نوع البحر الشعري
            </p>
            <Button
              colorScheme="blue"
              type="button"
              onClick={searchRecords}
              className="AbyatContainerButton"
            >
              بحث
            </Button>
          </Box>
          {search.map((targeet) => (
            <Box className="abyatResultContainer abyatResultContainerDark">
              <div className="abyatResultContainerCol">
                <h1 className="abyatResultContainerTitle">نتائج البحث</h1>
                <div className="AbyatContainerResultBox">
                    <h3 className="AbyatContainerH3Dark">القصيدة</h3>
                  <div className="AbyatContainerResultBoxRow">
                  <h4 className="AbyatContainerH4Dark">
                    {targeet.baytTwo}
                  </h4>
                  <h4 className="AbyatContainerH4Dark">
                    {targeet.baytOne}
                  </h4>
                  </div>
                  <h5 className="AbyatContainerH5Dark">نوع البحر الشعري: { targeet.type}</h5>
                </div>
              </div>
            </Box>
          ))}
        </>
      ) : (
        <>
          <Box className="AbyatContainer AbyatContainerLight">
            <h1 className="AbyatContainerTitle"> البحور الشعرية</h1>
            <div className="AbyatContainerCol">
              <div className="AbyatContainerRow">
                <FormControl isRequired>
                  <FormLabel className="AbyatContainerLabel">
                    الشطر الأول
                  </FormLabel>
                  <InputGroup size="md" className="AbyatContainerInputGroup">
                    <Input
                      variant="outline"
                      size="md"
                      id="form1"
                      onChange={(e) => setRecord(e.target.value)}
                      placeholder={`قم بكتابة الشطر الأول هنا..`}
                      className="AbyatContainerInput"
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={<ArrowBackIcon color="gray.300" />}
                      size="md"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel className="AbyatContainerLabel">
                    الشطر الثاني
                  </FormLabel>
                  <InputGroup size="md" className="AbyatContainerInputGroup">
                    <Input
                      variant="outline"
                      id="form2"
                      onChange={(e) => setRecord(e.target.value)}
                      size="md"
                      placeholder={`قم بكتابة الشطر الثاني هنا..`}
                      className="AbyatContainerInput"
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={<ArrowBackIcon color="gray.300" />}
                      size="md"
                    />
                  </InputGroup>
                </FormControl>
              </div>
            </div>
            <p className="AbyatContainerDetails">
              اكتب اول أبيات القصيدة ثم اضغط على بحث للحصول على نوع البحر الشعري
            </p>
            <Button
              colorScheme="blue"
              type="button"
              onClick={searchRecords}
              className="AbyatContainerButton"
            >
              بحث
            </Button>
          </Box>
          {search.map((targeet) => (
            <Box className="abyatResultContainer abyatResultContainerLight">
              <div className="abyatResultContainerCol">
                <h1 className="abyatResultContainerTitle">نتائج البحث</h1>
                <div className="AbyatContainerResultBox">
                    <h3 className="AbyatContainerH3Light">القصيدة</h3>
                  <div className="AbyatContainerResultBoxRow">
                  <h4 className="AbyatContainerH4Light">
                    {targeet.baytTwo}
                  </h4>
                  <h4 className="AbyatContainerH4Light">
                    {targeet.baytOne}
                  </h4>
                  </div>
                  <h5 className="AbyatContainerH5Dark">نوع البحر الشعري: { targeet.type}</h5>
                </div>
              </div>
            </Box>
          ))}
        </>
      )}
    </>
  );
}

export default AbyatResult;
