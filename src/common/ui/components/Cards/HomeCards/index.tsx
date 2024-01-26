import type {FC} from 'react';
import {memo} from 'react';
import {
  Container,
  ItemContainer,
  NameAuthor,
  TextDescrition,
  TitleCategory,
  ImageCardHorizontal,
} from './styles';
import type {Props} from './types';

const HomeCards: FC<Props> = ({
  title,
  description,
  name,
  onPress,
  variant,
  style,
}) => {
  return (
    <Container>
      <ItemContainer variant={variant} style={style} onPress={onPress}>
        <ImageCardHorizontal
          source={require('../../../../../assets/images/svq.webp')}
        />
        <TitleCategory>{title}</TitleCategory>
        <TextDescrition>{description}</TextDescrition>
        <NameAuthor>{name}</NameAuthor>
      </ItemContainer>
    </Container>
  );
};

export default memo(HomeCards);
