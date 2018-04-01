import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaListUl,
  FaListOl,
} from 'react-icons/lib/fa';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eaeaea;
  margin: 10px;
  flex: 1;
`;

const Sender = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  font-size: 12px;
  align-items: center;
`;

const Bubble = styled.div`
  display: inline-block;
  border-radius: 100px;
  background-color: #1e7145;
  color: #fff;
  padding: 10px 10px;
  margin: 10px;
`;

const Text = styled.textarea`
  width: 90%;
  height: 100px;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  margin: 0 20px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
`;

const Tools = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px;
`;

const Icon = styled.div`
  padding: 10px;
  color: #666;

  &:hover {
    background-color: #eaeaea;
  }
`;

const Send = styled.div`
  background-color: #0078d7;
  color: #fff;
  padding: 8px 18px;
  margin: 20px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 900;
  display: inline-block;

  &:hover {
    background-color: #106ebe;
  }
`;

const Discard = styled.div`
  color: #333;
  padding: 8px 18px;
  margin: 20px 0;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 900;
  display: inline-block;

  &:hover {
    background-color: #dadada;
  }
`;

const icons = [
  <FaBold size={16} />,
  <FaItalic size={16} />,
  <FaUnderline size={16} />,
  <FaAlignCenter size={16} />,
  <FaAlignJustify size={16} />,
  <FaAlignLeft size={16} />,
  <FaAlignRight size={16} />,
  <FaListUl size={16} />,
  <FaListOl size={16} />,
];

const Reply = ({
  sendMsg,
  updateSendMsg,
  submitSendMsg,
  discardSendMsg,
  submitOnEnter,
}) => (
  <Container>
    <Sender>
      <Bubble>CH</Bubble>
      admin@choutlook.com
    </Sender>
    <Text
      type="textarea"
      value={sendMsg}
      onChange={updateSendMsg}
      onKeyPress={submitOnEnter}
    />
    <Tools>{icons.map(icon => <Icon key={icon}>{icon}</Icon>)}</Tools>
    <Send onClick={submitSendMsg}>Send</Send>
    <Discard onClick={discardSendMsg}>Discard</Discard>
  </Container>
);

Reply.propTypes = {
  sendMsg: PropTypes.string.isRequired,
  updateSendMsg: PropTypes.func.isRequired,
  submitSendMsg: PropTypes.func.isRequired,
  discardSendMsg: PropTypes.func.isRequired,
  submitOnEnter: PropTypes.func.isRequired,
};

export default Reply;
