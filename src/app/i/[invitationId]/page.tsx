import { Button } from "@mui/material";
import { Metadata, NextPage, ResolvingMetadata, } from "next";
import Link from "next/link";
import React from "react";

const loadInvitationData = async (invitationId: string) => {
  const result = await (await fetch(`${process.env.API_SERVER_URL}/student-invitation/${invitationId}`, {
    headers: {
      'Cache-Control': 'no-store, max-age=0' // This header disables caching
    }
  })).json()

  return result
}

type Props = {
  params: { invitationId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const invitationId = params.invitationId

  const invitationData = await loadInvitationData(invitationId)

  return {
    openGraph: {
      images: ['https://gr5brq8nn2rq.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/gr5brq8nn2rq/b/bucket-20230810-2017/o/invitation-image-01.png'],
      description: 'opafion',
      title: `Se torne aluno de ${invitationData.trainerName}: fon!`,
      type: 'website',
      url: `${process.env.AUTH0_BASE_URL}/i/${params.invitationId}`
    },
  }
}

const Public: NextPage = async ({ params }: any) => {

  const invitationData = await loadInvitationData(params.invitationId)

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">Quer se tornar aluno de {invitationData.trainerName}?</h1>
      <div className="content__body">
        <p id="page-description">
          <span>
            This page retrieves a <strong>public message</strong>.
          </span>
          <Link href={"/i/" + params.invitationId + '/accept'}>
            <Button variant="contained">Aceitar</Button>
          </Link>
          <span>
            <strong>Any visitor can access this page.</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Public;
