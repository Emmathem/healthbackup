import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

const ExperienceCard = ({ title, subheader, image, subtitle, description, languages }) => {
    return (
        <Card className="experience">
            <CardHeader title={title} subheader={subheader} />
            <CardMedia style={{ paddingTop: '56.25%', height: '0' }} image={image} title={subtitle} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <div className="experience__langs">
                {languages.length > 0 ? (
                    languages.map((lang, index) => {
                        return <div key={index}>{lang}</div>;
                    })
                ) : (
                    <p>No lang found</p>
                )}
            </div>
        </Card>
    );
};

export default ExperienceCard;
