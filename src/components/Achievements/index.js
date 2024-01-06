import React from 'react';
import styled from 'styled-components';
import { FaMedal } from 'react-icons/fa'; // You can replace this with the actual icons you want to use
import { AiOutlineTrophy } from 'react-icons/ai';
import { IoMdStarOutline } from 'react-icons/io';
import { BiMedal } from 'react-icons/bi';
import { BsAward } from 'react-icons/bs';
import { GitHubButton } from '../Navbar/NavbarStyledComponent';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const AchievementsSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const AchievementItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
`;

const AwardIcon = styled.div`
    font-size: 24px;
    color: #854CE6; /* Customize the color as needed */
`;

const Index = () => {
    return (
        <Container id="achievements">
            <Wrapper>
                <Title>Achievements and Awards</Title>
                <Desc>
                    Information about my achievements and awards in the field of programming.
                </Desc>
                <AchievementsSection>
                    <AchievementItem>
                        <AwardIcon>
                            <FaMedal />
                        </AwardIcon>
                        LeetCode Rating: 1591 - (Top 23.37%) <GitHubButton href="https://leetcode.com/Madhav_Kamble/" target='_blank'>Profile Link</GitHubButton>
                    </AchievementItem>
                    <AchievementItem>
                        <AwardIcon>
                            <AiOutlineTrophy />
                        </AwardIcon>
                        Codechef Rating: 1441 [2⭐]<GitHubButton href="https://www.codechef.com/users/madhav_kamble" target='_blank'>Profile Link</GitHubButton>
                    </AchievementItem>
                    <AchievementItem>
                        <AwardIcon>
                            <IoMdStarOutline />
                        </AwardIcon>
                        HackerRank: C Programming [4 Star]<GitHubButton href="https://www.hackerrank.com/profile/madhavukamble" target='_blank'>Profile Link</GitHubButton>
                    </AchievementItem>
                    <AchievementItem>
                        <AwardIcon>
                            <BiMedal />
                        </AwardIcon>
                        Runner-up: Sinhgad Hackathon 2k23
                    </AchievementItem>
                    <AchievementItem>
                        <AwardIcon>
                            <BiMedal />
                        </AwardIcon>
                        Runner-up: Sinhgad Hackathon 2k22
                    </AchievementItem>
                    <AchievementItem>
                        <AwardIcon>
                            <BiMedal />
                        </AwardIcon>
                        Runner-up: Sinhgad Front End Development Competition
                    </AchievementItem>
                </AchievementsSection>
            </Wrapper>
        </Container>
    );
};

export default Index;
