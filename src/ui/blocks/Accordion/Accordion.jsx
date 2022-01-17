import React, { useEffect, useMemo, useState } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AccordionSwitch,
  AccordionBody,
  AccordionItem,
  AccordionStyled,
  AccordionText,
  AccordionTitle,
  AccordionWrapper,
  Title,
  Tabs,
  Tab,
  Header,
} from "./AccordionStyled";
import { routesPath } from "../../../conts/routes";
import { Container } from "../../base/Container";
import { MinusIcon, PlusIcon } from "../../icons";
import { instructorsFaq, usersFaq } from "./faqLists";
import { KeyWords } from "./KeyWords";

const makeOpenItemId = (index, id) => `${index}_${id}`;

const FaqAccordion = ({ openItems, handleItemClick, array }) =>
  useMemo(() => {
    return array.map((item, index) => {
      const open = openItems.includes(makeOpenItemId(index, item.id));
      return (
        <AccordionItem key={item.id} isOpen={open}>
          <AccordionSwitch
            onClick={() => handleItemClick(makeOpenItemId(index, item.id))}
            isOpen={open}
          >
            {open ? <MinusIcon /> : <PlusIcon />}
          </AccordionSwitch>
          <AccordionTitle
            onClick={() => handleItemClick(makeOpenItemId(index, item.id))}
          >
            {item.title}
          </AccordionTitle>
          <AccordionBody isOpen={open}>
            <AccordionText dangerouslySetInnerHTML={{ __html: item.text }} />
          </AccordionBody>
        </AccordionItem>
      );
    });
  }, [openItems, array]);

const Accordion = ({ filterBySearch }) => {
  const [openItems, setOpenItems] = useState([]);
  const [activeTab, setActive] = useState({ users: true, instructors: false });
  const [usersFAQ, setUsersFAQ] = useState(usersFaq);
  const [instructorsFAQ, setInstructorsFAQ] = useState(instructorsFaq);
  const [filterData, setFilterData] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { faqtab } = queryString.parse(location.search);

  const searchStringInArray = (baseData, searchedItem) => {
    const filterData = [];
    for (let item of baseData) {
      for (let keyWord of searchedItem) {
        if (keyWord.length > 0) {
          if (item?.title?.toLowerCase()?.includes(keyWord)) {
            filterData.push(item);
          }
        }
      }
    }
    return [...new Set(filterData)];
  };

  const MemoizationDataForFAQ = () => {
    if (filterData.length > 0) {
      return filterData;
    } else {
      return activeTab.users ? usersFAQ : instructorsFAQ;
    }
  };

  const checkMatch = (keywords, searchData) => {
    let isSearched = false;
    for (let i = 0; i < keywords.length; i++) {
      for (let j = 0; j < searchData.length; j++) {
        if (keywords[i] === searchData[j]) {
          return (isSearched = true);
        }
      }
    }
    return isSearched;
  };

  const resetSearch = () => {
    setFilterData([]);
    setInstructorsFAQ(instructorsFaq);
    setUsersFAQ(usersFaq);
  };

  const isKeyWordRequired = () => {
    if (activeTab.users) {
      filterBySearch.length <= 1 && resetSearch();
      return checkMatch(KeyWords.user, filterBySearch);
    } else {
      filterBySearch.length <= 1 && resetSearch();
      return checkMatch(KeyWords.instructors, filterBySearch);
    }
  };

  useEffect(() => {
    if (isKeyWordRequired()) {
      if (activeTab.users) {
        const mathArray = searchStringInArray(usersFaq, filterBySearch);
        mathArray.length > 0 && setFilterData(mathArray);
      } else {
        const mathArray = searchStringInArray(instructorsFaq, filterBySearch);
        mathArray.length > 0 && setFilterData(mathArray);
      }
    }
  }, [filterBySearch]);

  useEffect(() => {
    if (faqtab === "1") {
      setActive({ users: true, instructors: false });
    } else {
      setActive({ users: false, instructors: true });
    }

    setOpenItems([]);
  }, [setOpenItems, faqtab]);

  const handleItemClick = (itemId) => {
    setOpenItems((prev) => {
      let next;
      if (prev.includes(itemId)) {
        next = [];
      } else {
        next = [itemId];
      }
      return next;
    });
  };

  const handleClickFirstTab = () => {
    filterBySearch.length <= 1 && resetSearch();
    setActive({ users: true, instructors: false });
    navigate(`${routesPath.faq}?tab=1`, { replace: true });
  };

  const handleClickSecondtTab = () => {
    filterBySearch.length <= 1 && resetSearch();
    setActive({ users: false, instructors: true });
    navigate(`${routesPath.faq}?tab=2`, { replace: true });
  };

  return (
    <AccordionWrapper>
      <Container>
        <Header>
          <Title>Most frequently asked questions</Title>
          <Tabs>
            <Tab active={activeTab.users} onClick={handleClickFirstTab}>
              Users
            </Tab>
            <Tab active={activeTab.instructors} onClick={handleClickSecondtTab}>
              Instructors
            </Tab>
          </Tabs>
        </Header>
        <AccordionStyled>
          <FaqAccordion
            openItems={openItems}
            handleItemClick={handleItemClick}
            array={MemoizationDataForFAQ()}
          />
        </AccordionStyled>
      </Container>
    </AccordionWrapper>
  );
};

export default Accordion;
