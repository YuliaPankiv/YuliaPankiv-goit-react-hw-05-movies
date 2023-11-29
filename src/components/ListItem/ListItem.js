// import React from 'react';
// import { Link } from 'react-router-dom';
// import NoImage from '../../image/NoImage.svg.png';
// import { Container, Rating } from '@mui/material';

// function ListItem({ movie, location }) {
//   const {
//     title,
//     name,
//     id,
//     poster_path,
//     vote_average,
//     release_date,
//     first_air_date,
//   } = movie;
//   console.log(vote_average);
//   return (
//     <>
//       <div>
//         {poster_path ? (
//           <img
//             src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
//             width={`80`}
//             alt="preview"
//           />
//         ) : (
//           <img src={NoImage} width={`50`} alt="preview" />
//         )}
//       </div>
//       <div>
//         <Link to={`/movies/${id}`} state={{ from: location }}>
//           {title || name}
//         </Link>{' '}
//         <p> {first_air_date || release_date}</p>
//         <Rating
//           name="size-small"
//           defaultValue={vote_average / 2}
//           precision={0.5}
//           readOnly
//           size="small"
//         />
//       </div>
//     </>
//   );
// }

// export default ListItem;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import NoImage from '../../image/NoImage.svg.png';
import { Link } from 'react-router-dom';

function ListMovie({ movie, location }) {
  const {
    title,
    name,
    id,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
  } = movie;
  let shortTitle;

  if (title) {
    shortTitle = title.length <= 15 ? title : `${title.slice(0, 15)} ...`;
  }

  let shortName;
  if (name) {
    shortName = name?.length <= 15 ? name : `${name.slice(0, 15)} ...`;
  }

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {poster_path ? (
            <CardMedia
              component="img"
              height="auto"
              image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="green iguana"
            />
          ) : (
            <img src={NoImage} alt="preview" />
          )}

          <CardContent sx={{ height: 80 }}>
            <Typography gutterBottom variant="h5">
              {shortName || shortTitle}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {first_air_date || release_date}
            </Typography>
            <Rating
              name="size-small"
              defaultValue={vote_average / 2}
              precision={0.5}
              readOnly
              size="small"
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
export default ListMovie;

// console.log(vote_average);
// return (
//   <>
//     <div>
//       {poster_path ? (
//         <img
//           src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
//           width={`80`}
//           alt="preview"
//         />
//       ) : (
//         <img src={NoImage} width={`50`} alt="preview" />
//       )}
//     </div>
//     <div>
//       <Link to={`/movies/${id}`} state={{ from: location }}>
//         {title || name}
//       </Link>{' '}
//       <p> {first_air_date || release_date}</p>
//       <Rating
//         name="size-small"
//         defaultValue={vote_average / 2}
//         precision={0.5}
//         readOnly
//         size="small"
//       />
//     </div>
//   </>
