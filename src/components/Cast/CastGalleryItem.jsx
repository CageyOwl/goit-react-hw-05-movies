import PropTypes from 'prop-types';

import { StyledCastImg } from './cast.styles';


export default function CastGalleryItem({ name, photoURL }) {
    return <li><StyledCastImg src={photoURL} alt={name} />{name}</li>;
}


CastGalleryItem.propTypes = {
    name: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
};