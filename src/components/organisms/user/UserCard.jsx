import styled from "styled-components";
import { Card } from "../../atoms/card/card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>電話番号</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>Web</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
