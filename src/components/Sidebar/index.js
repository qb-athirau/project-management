import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorThemes from '../../configs/styles/colorThemes';
import SearchBar from '../../components/SearchBar';
import { StyledSideNav, SpanText, StyledLink } from './style';

const Sidebar = ({ open, ...props }) => {
  const [active, setActive] = React.useState(false);
  const [projectList, setProjectList] = React.useState(
    props.projectList.length !== 0 ? props.projectList : [],
  );

  React.useEffect(() => {
    setProjectList(props.projectList);
  }, [props.projectList]);
  const handleSearch = (event) => {
    if (event.target.value.trim()) {
      const newList = props.projectList.filter((item) => {
        return (
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.description.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });
      setProjectList(newList);
    } else {
      setProjectList(props.projectList);
    }
  };

  return (
    <StyledSideNav isOpen={open}>
      <div className="sidenav">
        <SearchBar onChange={(value) => handleSearch(value)} />
        <div className="list-header">
          <span>Project Name</span>
          <span>status</span>
        </div>
        {projectList?.map((item, index) => {
          return (
            <StyledLink
              to={item.id}
              className="navlink"
              key={item.id}
              onClick={(e) => {
                setActive(true);
              }}
              title={item.name}>
              <span className="span-wraper">
                <SpanText isOpen={open}>{item.name}</SpanText>
                <SpanText className="descriptn" isOpen={open}>
                  {item.description}
                </SpanText>
              </span>
              <span className="circle">
                <CircularProgressbar
                  value={item.status}
                  text={`${item.status}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: `${colorThemes.Gray20}`,
                    textSize: '25px',
                  })}
                />
              </span>
            </StyledLink>
          );
        })}
      </div>
    </StyledSideNav>
  );
};
export default Sidebar;
