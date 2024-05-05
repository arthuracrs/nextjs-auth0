import { NextPage, } from "next";
import { getAccessToken } from '@auth0/nextjs-auth0';
import React from "react";

const acceptInvitation = async (invitationId: string): Promise<string> => {
  const { accessToken } = await getAccessToken();

  try {
    const result = await fetch(`${process.env.API_SERVER_URL}/student-invitation/${invitationId}/accept`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    if (!result.ok) {
      throw new Error('Network response was not ok');
    }
    const body = await result.json()

    return body.trainerName
  } catch (error) {
    throw error
  }
}

const Public: NextPage = async ({ params }: any) => {

  const trainerName = await acceptInvitation(params.invitationId)

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">Você se tornou aluno de {trainerName}</h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            <strong>Private access page.</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Public;
