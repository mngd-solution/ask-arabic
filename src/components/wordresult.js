import React, { useRef } from "react";
import "./wordresult.css";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Ref } from "react";

function WordResult() {
  const { colorMode } = useColorMode();
  const [search, setSearch] = useState([]);

  const [record, setRecord] = useState([]);

  var i = 1;

  const loadRecords = async () => {
    axios.get("http://localhost:3000/Words").then((response) => {
      setSearch(response.data);
    });
  };

  useEffect(() => {
    // loadRecords();
  }, []);

  const searchRecords = () => {
    axios
      .get(`http://localhost:3000/Words/?wordSearch=${record}`)
      .then((response) => {
        setSearch(response.data);
      });
  };

  const ref = useRef(null);

  useEffect(() => {
    const element = document.getElementById('hidden');
  }, []);

  return (
    <>
      {colorMode === "dark" ? (
        <>
          <Box className="WordsContainer WordsContainerDark">
            <div className="WordsContainerCol">
              <h1 className="WordsContainerTitle">قاموس الكلمات</h1>
              <InputGroup size="md" className="WordsContainerInputGroup">
                <Input
                  variant="outline"
                  id="form1"
                  onChange={(e) => setRecord(e.target.value)}
                  size="md"
                  placeholder={`أبحث عن كلمة`}
                  className="WordsContainerInput"
                />
                <InputRightElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                  size="md"
                />
              </InputGroup>
              <p className="WordsContainerDetails">
                اكتب اي كلمة ثم اضغط على بحث للحصول على معناها في القاموس العربي
              </p>
              <Button
                colorScheme="blue"
                type="button"
                onClick={searchRecords}
                className="WordsContainerButton"
              >
                بحث
              </Button>
            </div>
          </Box>
          {search.map((targeet) => (
            <Box
              className="wordResultContainer wordResultContainerDark"
              id="hidden"
            >
              <div className="wordResultContainerCol">
                <h1 className="wordResultContainerTitle">نتائج البحث</h1>
                <div>
                  <h4 className="wordResultContainerWordDark">
                    الكلمة: {targeet.word}
                  </h4>
                  <h4 className="wordResultContainerWordDark">
                    المعنى: {targeet.meaning}
                  </h4>
                </div>
              </div>
            </Box>
          ))}
        </>
      ) : (
        <>
          <>
            <Box
              className="WordsContainer wordResultContainerLight"
              id="hidden"
            >
              <div className="WordsContainerCol">
                <h1 className="WordsContainerTitle">قاموس الكلمات</h1>
                <InputGroup size="md" className="WordsContainerInputGroup">
                  <Input
                    variant="outline"
                    id="form1"
                    onChange={(e) => setRecord(e.target.value)}
                    size="md"
                    placeholder={`أبحث عن كلمة`}
                    className="WordsContainerInput"
                  />
                  <InputRightElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                    size="md"
                  />
                </InputGroup>
                <p className="WordsContainerDetails">
                  اكتب اي كلمة ثم اضغط على بحث للحصول على معناها في القاموس
                  العربي
                </p>
                <Button
                  colorScheme="blue"
                  type="button"
                  onClick={searchRecords}
                  className="WordsContainerButton"
                >
                  بحث
                </Button>
              </div>
            </Box>
            {search.map((targeet) => (
              <>
                <Box
                  className="wordResultContainer wordResultContainerLight"
                  id="Result"
                >
                  <div className="wordResultContainerCol">
                    <h1 className="wordResultContainerTitle">نتائج البحث</h1>
                    <div>
                      <h4 className="wordResultContainerWordLight">
                        الكلمة: {targeet.word}
                      </h4>
                      <h4 className="wordResultContainerWordLight">
                        المعنى: {targeet.meaning}
                      </h4>
                    </div>
                  </div>
                </Box>
              </>
            ))}
          </>
        </>
      )}
    </>
  );
}

export default WordResult;
